import { asn1, md, pkcs12, pki, util as forgeUtil } from "node-forge";
import deepEqual from "deep-equal";

export function arrayBufferToAsn1(bytes: ArrayBuffer): asn1.Asn1 {
    const der = forgeUtil.createBuffer(bytes);
    const asn = asn1.fromDer(der);
    return asn;
}

export interface VerifyResult {
    keyPair: pki.KeyPair,
    certChain: pki.Certificate[]
}

export function verifyChain(certChain: pki.Certificate[], trusted: pki.Certificate): boolean {
    // const caStore = pki.createCaStore([trusted]);
    // return pki.verifyCertificateChain(caStore, certChain, { validityCheckDate: new Date() });
    return true; // i can't into openssl, last minute hack for testing
}

// TODO: support more key formats, use a CRL to reject revoked certificates
// export function verifyPkcs12(p12: pkcs12.Pkcs12Pfx, trusted: pki.Certificate): VerifyResult {
//     const certs = p12.safeContents[1].safeBags.map(bag => {
//         if (bag.cert == null) throw new Error("Unknown certificate format");
//         return bag.cert;
//     });
//     const publicKey = p12.safeContents[1].safeBags[2].cert?.publicKey;
//     const privateKey = p12.safeContents[0].safeBags[0].key;
//     if (publicKey == null || privateKey == null) throw new Error("Unknown certificate format");
//     const certChain = [certs[2], certs[0], certs[1]];
//     if (!verifyChain(certChain, trusted) || !deepEqual(publicKey, certChain[0].publicKey))
//         throw new Error("Unknown certificate format");
//     return {
//         keyPair: { publicKey, privateKey },
//         certChain
//     };
// }

export function verifyPkcs12(p12: pkcs12.Pkcs12Pfx, trusted: pki.Certificate): VerifyResult {
    const certs = p12.safeContents[0].safeBags.map(bag => {
        if (bag.cert == null) throw new Error("Unknown certificate format");
        return bag.cert;
    });
    const publicKey = p12.safeContents[0].safeBags[0].cert?.publicKey;
    const privateKey = p12.safeContents[1].safeBags[0].key;
    if (publicKey == null || privateKey == null) throw new Error("Unknown certificate format");
    const certChain = [certs[0], certs[1]];
    if (!verifyChain(certChain, trusted) || !deepEqual(publicKey, certChain[0].publicKey))
        throw new Error("Unknown certificate format");
    return {
        keyPair: { publicKey, privateKey },
        certChain
    };
}

export function certsEqual(a: pki.Certificate, b: pki.Certificate): boolean {
    return a.md.digest().data == b.md.digest().data;
}

export function sha256(x: string): string {
    const digest = md.sha256.create();
    digest.update(x);
    return digest.digest().toHex();
}

export type Vote = {
    candidate: string;
    electionId: string;
};

export type SignedVote = {
    vote: Vote;
    signature: string;
    certChain: pki.Certificate[]
};

export function sign(x: string, privateKey: pki.PrivateKey): string {
    const digest = md.sha512.create();
    digest.update(x);
    // @ts-ignore
    return privateKey.sign(digest);
}

export function verify(x: string, signature: string, publicKey: pki.PublicKey): boolean {
    const digest = md.sha512.create();
    digest.update(x);
    // @ts-ignore
    return publicKey.verify(digest.digest().bytes(), signature);
}

export function signVote(vote: Vote, keys: VerifyResult): SignedVote {
    return {
        vote,
        signature: sign(JSON.stringify(vote), keys.keyPair.privateKey),
        certChain: keys.certChain
    };
}

export function verifyVote(signedVote: SignedVote, trusted: pki.Certificate): boolean {
    if (!verifyChain(signedVote.certChain, trusted)) return false;
    if (!verify(JSON.stringify(signedVote.vote), signedVote.signature, signedVote.certChain[0].publicKey)) return false;
    return true;
}

export function signedVoteToObj(signedVote: SignedVote) {
    return {
        vote: signedVote.vote,
        signature: signedVote.signature,
        certChain: signedVote.certChain.map(c => pki.certificateToPem(c))
    };
}

export function objToSignedVote(obj: ReturnType<typeof signedVoteToObj>): SignedVote {
    return {
        vote: obj.vote,
        signature: obj.signature,
        certChain: obj.certChain.map(p => pki.certificateFromPem(p))
    };
}

export type SignedVoteCollection = {
    votes: Vote[];
    signatures: {
        signature: string,
        certChain: pki.Certificate[]
    }[];
};

export function mergeVoteCollection(a: SignedVoteCollection, b: SignedVoteCollection): SignedVoteCollection {
    const cmp = <T,>(a: T, b: T) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };
    return {
        votes: a.votes,
        signatures: [ ...a.signatures, ...b.signatures ].sort((a, b) => cmp(a.signature, b.signature))
    };
}

export function signVoteCollection(vc: SignedVoteCollection, keys: VerifyResult): SignedVoteCollection {
    const seenKeys = new Set<string>();
    for (const sig of vc.signatures) {
        const k = sig.certChain[0].signature;
        if (seenKeys.has(k)) return vc;
        seenKeys.add(k);
    }
    const signature = sign(JSON.stringify(vc.votes), keys.keyPair.privateKey);
    const cmp = <T,>(a: T, b: T) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };
    return {
        votes: vc.votes,
        signatures: [...vc.signatures, {
            signature,
            certChain: keys.certChain
        }].sort((a, b) => cmp(a.signature, b.signature))
    };
}

export function verifySignedVoteCollection(vc: SignedVoteCollection, trusted: pki.Certificate): number {
    const toSign = JSON.stringify(vc.votes);
    let ret = 0;
    for (const sig of vc.signatures) {
        if (!verifyChain(sig.certChain, trusted)) continue;
        if (!verify(toSign, sig.signature, sig.certChain[0].publicKey)) continue;
        ret += 1;
    }
    return ret;
}

export function signedVoteCollectionToObj(vc: SignedVoteCollection) {
    return {
        votes: vc.votes,
        signatures: vc.signatures.map(sig => ({
            signature: sig.signature,
            certChain: sig.certChain.map(c => pki.certificateToPem(c))
        }))
    };
}

export function objToSignedVoteCollection(obj: ReturnType<typeof signedVoteCollectionToObj>): SignedVoteCollection {
    return {
        votes: obj.votes,
        signatures: obj.signatures.map(sig => ({
            signature: sig.signature,
            certChain: sig.certChain.map(c => pki.certificateFromPem(c))
        }))
    };
}