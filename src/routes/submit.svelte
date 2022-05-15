<script context="module" lang="ts">
    import type { Load } from "./submit.d";
    export const load: Load = async ({ url }) => {
        return {
            props: {
                stranka: url.searchParams.get("stranka")
            }
        }
    };
</script>

<script lang="ts">
    import {
        arrayBufferToAsn1,
        verifyPkcs12,
        type VerifyResult,
    } from "$lib/certs";

    import { assets } from "$app/paths";

    import { ELECTION_ID, SEARCH_POLL_INTERVAL, TRUST_ROOT } from "$lib/config";
    import type { RelayReplyPoll } from "$lib/relay";

    import { Voting, type OnCompletion } from "$lib/voting";
    import { pkcs12, pki } from "node-forge";
    import { onMount } from "svelte";
import { globals } from "svelte/internal";

    function initVoting(
        keys: VerifyResult,
        candidate: string,
        onCompletion: (obj: OnCompletion) => void
    ): Voting {
        const uid = new Date().toString();

        return new Voting({
            keys,
            timeouts: {
                gather: 5,
                sign: 5,
                wait: 5,
            },
            trusted: TRUST_ROOT,
            uid,
            vote: {
                candidate,
                electionId: ELECTION_ID,
            },
            relay: {
                async search() {
                    await fetch("/relay", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            uid,
                            body: {
                                type: "search",
                            },
                        }),
                    });
                },
                async poll(content?: any): Promise<RelayReplyPoll> {
                    const resp = await fetch("/relay", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            uid,
                            body: {
                                type: "poll",
                                body: content,
                            },
                        }),
                    });
                    return resp.json();
                },
            },
            onCompletion,
        });
    }

    let files: FileList;
    export let stranka: string;
    let poll = () => {};

    let msg = "Čakam.";

    $: files, stranka, startVoting();

    let started = false;
    async function startVoting() {
        if (files == null) return;
        if (files.length == 0) return;
        if (stranka == null || stranka.trim() == "") return;
        const file = files.item(0);
        if (file == null) return;
        if (started) return;
        else started = true;
        console.log("voting");
        msg = "Oddajam glas...";

        const fileContents = await file.arrayBuffer();
        const p12 = pkcs12.pkcs12FromAsn1(arrayBufferToAsn1(fileContents), "a");
        const verified = verifyPkcs12(p12, TRUST_ROOT);

        const voting = initVoting(verified, stranka, (obj) => {
            msg = "Končano."
            const toSend = {
                votes: obj.votes,
                signatures: obj.signatures.map((sig) => ({
                    signature: sig.signature,
                    certChain: sig.certChain.map((c) =>
                        pki.certificateToPem(c)
                    ),
                    clientSignature: sig.certChain[0].signature,
                })),
            };
            fetch("/submit", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(toSend),
            });
        });
        poll = () => voting.relayTick();
    }

    onMount(() => {
        const handle = setInterval(() => poll(), SEARCH_POLL_INTERVAL * 1000);
        return () => clearInterval(handle);
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="{assets}/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true> 
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap" rel="stylesheet">
</svelte:head>

<header style="width: 49vw; height: 99vh;">
    <img style="height: 4rem; margin: 25rem 0 0 20rem " src="{assets}/logo2-white.png" alt="">
</header>
<div class="wrapper" style="width: 49vw; height: 99vh;" id="special1">
    <div class="form-wrapper" style="width: 49vw; height: 99vh;">
        <div class="form-body">
            <form style="margin:20rem 0 0 0;" action="none" method="post">
                <h2 style="font-family: 'JetBrains Mono', monospace;">ADD CERT:</h2>
                <input type="file" name="popofile" id="file" bind:files />
                <input class="button-31" id="special3" type="submit" value="REGISTER" />
                <label for="file">{msg}</label>
            </form>
        </div>
    </div>
</div>

<style>

</style>