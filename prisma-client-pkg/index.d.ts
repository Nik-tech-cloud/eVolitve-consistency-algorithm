
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model RelayClient
 * 
 */
export type RelayClient = {
  id: string
  lastPing: Date
  groupId: number | null
}

/**
 * Model RelayGroup
 * 
 */
export type RelayGroup = {
  id: number
}

/**
 * Model RelayClientMessage
 * 
 */
export type RelayClientMessage = {
  id: number
  clientId: string
  message: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RelayClients
 * const relayClients = await prisma.relayClient.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more RelayClients
   * const relayClients = await prisma.relayClient.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>;

      /**
   * `prisma.relayClient`: Exposes CRUD operations for the **RelayClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelayClients
    * const relayClients = await prisma.relayClient.findMany()
    * ```
    */
  get relayClient(): Prisma.RelayClientDelegate<GlobalReject>;

  /**
   * `prisma.relayGroup`: Exposes CRUD operations for the **RelayGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelayGroups
    * const relayGroups = await prisma.relayGroup.findMany()
    * ```
    */
  get relayGroup(): Prisma.RelayGroupDelegate<GlobalReject>;

  /**
   * `prisma.relayClientMessage`: Exposes CRUD operations for the **RelayClientMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelayClientMessages
    * const relayClientMessages = await prisma.relayClientMessage.findMany()
    * ```
    */
  get relayClientMessage(): Prisma.RelayClientMessageDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.14.0
   * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    RelayClient: 'RelayClient',
    RelayGroup: 'RelayGroup',
    RelayClientMessage: 'RelayClientMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;


  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RelayClientCountOutputType
   */


  export type RelayClientCountOutputType = {
    messages: number
  }

  export type RelayClientCountOutputTypeSelect = {
    messages?: boolean
  }

  export type RelayClientCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RelayClientCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RelayClientCountOutputType
    : S extends undefined
    ? never
    : S extends RelayClientCountOutputTypeArgs
    ?'include' extends U
    ? RelayClientCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RelayClientCountOutputType ? RelayClientCountOutputType[P] : never
  } 
    : RelayClientCountOutputType
  : RelayClientCountOutputType




  // Custom InputTypes

  /**
   * RelayClientCountOutputType without action
   */
  export type RelayClientCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RelayClientCountOutputType
     * 
    **/
    select?: RelayClientCountOutputTypeSelect | null
  }



  /**
   * Count Type RelayGroupCountOutputType
   */


  export type RelayGroupCountOutputType = {
    clients: number
  }

  export type RelayGroupCountOutputTypeSelect = {
    clients?: boolean
  }

  export type RelayGroupCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RelayGroupCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RelayGroupCountOutputType
    : S extends undefined
    ? never
    : S extends RelayGroupCountOutputTypeArgs
    ?'include' extends U
    ? RelayGroupCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RelayGroupCountOutputType ? RelayGroupCountOutputType[P] : never
  } 
    : RelayGroupCountOutputType
  : RelayGroupCountOutputType




  // Custom InputTypes

  /**
   * RelayGroupCountOutputType without action
   */
  export type RelayGroupCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RelayGroupCountOutputType
     * 
    **/
    select?: RelayGroupCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model RelayClient
   */


  export type AggregateRelayClient = {
    _count: RelayClientCountAggregateOutputType | null
    _avg: RelayClientAvgAggregateOutputType | null
    _sum: RelayClientSumAggregateOutputType | null
    _min: RelayClientMinAggregateOutputType | null
    _max: RelayClientMaxAggregateOutputType | null
  }

  export type RelayClientAvgAggregateOutputType = {
    groupId: number | null
  }

  export type RelayClientSumAggregateOutputType = {
    groupId: number | null
  }

  export type RelayClientMinAggregateOutputType = {
    id: string | null
    lastPing: Date | null
    groupId: number | null
  }

  export type RelayClientMaxAggregateOutputType = {
    id: string | null
    lastPing: Date | null
    groupId: number | null
  }

  export type RelayClientCountAggregateOutputType = {
    id: number
    lastPing: number
    groupId: number
    _all: number
  }


  export type RelayClientAvgAggregateInputType = {
    groupId?: true
  }

  export type RelayClientSumAggregateInputType = {
    groupId?: true
  }

  export type RelayClientMinAggregateInputType = {
    id?: true
    lastPing?: true
    groupId?: true
  }

  export type RelayClientMaxAggregateInputType = {
    id?: true
    lastPing?: true
    groupId?: true
  }

  export type RelayClientCountAggregateInputType = {
    id?: true
    lastPing?: true
    groupId?: true
    _all?: true
  }

  export type RelayClientAggregateArgs = {
    /**
     * Filter which RelayClient to aggregate.
     * 
    **/
    where?: RelayClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayClients to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RelayClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayClients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayClients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelayClients
    **/
    _count?: true | RelayClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelayClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelayClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelayClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelayClientMaxAggregateInputType
  }

  export type GetRelayClientAggregateType<T extends RelayClientAggregateArgs> = {
        [P in keyof T & keyof AggregateRelayClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelayClient[P]>
      : GetScalarType<T[P], AggregateRelayClient[P]>
  }




  export type RelayClientGroupByArgs = {
    where?: RelayClientWhereInput
    orderBy?: Enumerable<RelayClientOrderByWithAggregationInput>
    by: Array<RelayClientScalarFieldEnum>
    having?: RelayClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelayClientCountAggregateInputType | true
    _avg?: RelayClientAvgAggregateInputType
    _sum?: RelayClientSumAggregateInputType
    _min?: RelayClientMinAggregateInputType
    _max?: RelayClientMaxAggregateInputType
  }


  export type RelayClientGroupByOutputType = {
    id: string
    lastPing: Date
    groupId: number | null
    _count: RelayClientCountAggregateOutputType | null
    _avg: RelayClientAvgAggregateOutputType | null
    _sum: RelayClientSumAggregateOutputType | null
    _min: RelayClientMinAggregateOutputType | null
    _max: RelayClientMaxAggregateOutputType | null
  }

  type GetRelayClientGroupByPayload<T extends RelayClientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RelayClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelayClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelayClientGroupByOutputType[P]>
            : GetScalarType<T[P], RelayClientGroupByOutputType[P]>
        }
      >
    >


  export type RelayClientSelect = {
    id?: boolean
    lastPing?: boolean
    group?: boolean | RelayGroupArgs
    groupId?: boolean
    messages?: boolean | RelayClientMessageFindManyArgs
    _count?: boolean | RelayClientCountOutputTypeArgs
  }

  export type RelayClientInclude = {
    group?: boolean | RelayGroupArgs
    messages?: boolean | RelayClientMessageFindManyArgs
    _count?: boolean | RelayClientCountOutputTypeArgs
  }

  export type RelayClientGetPayload<
    S extends boolean | null | undefined | RelayClientArgs,
    U = keyof S
      > = S extends true
        ? RelayClient
    : S extends undefined
    ? never
    : S extends RelayClientArgs | RelayClientFindManyArgs
    ?'include' extends U
    ? RelayClient  & {
    [P in TrueKeys<S['include']>]:
        P extends 'group' ? RelayGroupGetPayload<S['include'][P]> | null :
        P extends 'messages' ? Array < RelayClientMessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? RelayClientCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'group' ? RelayGroupGetPayload<S['select'][P]> | null :
        P extends 'messages' ? Array < RelayClientMessageGetPayload<S['select'][P]>>  :
        P extends '_count' ? RelayClientCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RelayClient ? RelayClient[P] : never
  } 
    : RelayClient
  : RelayClient


  type RelayClientCountArgs = Merge<
    Omit<RelayClientFindManyArgs, 'select' | 'include'> & {
      select?: RelayClientCountAggregateInputType | true
    }
  >

  export interface RelayClientDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RelayClient that matches the filter.
     * @param {RelayClientFindUniqueArgs} args - Arguments to find a RelayClient
     * @example
     * // Get one RelayClient
     * const relayClient = await prisma.relayClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RelayClientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RelayClientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RelayClient'> extends True ? CheckSelect<T, Prisma__RelayClientClient<RelayClient>, Prisma__RelayClientClient<RelayClientGetPayload<T>>> : CheckSelect<T, Prisma__RelayClientClient<RelayClient | null >, Prisma__RelayClientClient<RelayClientGetPayload<T> | null >>

    /**
     * Find the first RelayClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientFindFirstArgs} args - Arguments to find a RelayClient
     * @example
     * // Get one RelayClient
     * const relayClient = await prisma.relayClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RelayClientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RelayClientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RelayClient'> extends True ? CheckSelect<T, Prisma__RelayClientClient<RelayClient>, Prisma__RelayClientClient<RelayClientGetPayload<T>>> : CheckSelect<T, Prisma__RelayClientClient<RelayClient | null >, Prisma__RelayClientClient<RelayClientGetPayload<T> | null >>

    /**
     * Find zero or more RelayClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelayClients
     * const relayClients = await prisma.relayClient.findMany()
     * 
     * // Get first 10 RelayClients
     * const relayClients = await prisma.relayClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relayClientWithIdOnly = await prisma.relayClient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RelayClientFindManyArgs>(
      args?: SelectSubset<T, RelayClientFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RelayClient>>, PrismaPromise<Array<RelayClientGetPayload<T>>>>

    /**
     * Create a RelayClient.
     * @param {RelayClientCreateArgs} args - Arguments to create a RelayClient.
     * @example
     * // Create one RelayClient
     * const RelayClient = await prisma.relayClient.create({
     *   data: {
     *     // ... data to create a RelayClient
     *   }
     * })
     * 
    **/
    create<T extends RelayClientCreateArgs>(
      args: SelectSubset<T, RelayClientCreateArgs>
    ): CheckSelect<T, Prisma__RelayClientClient<RelayClient>, Prisma__RelayClientClient<RelayClientGetPayload<T>>>

    /**
     * Delete a RelayClient.
     * @param {RelayClientDeleteArgs} args - Arguments to delete one RelayClient.
     * @example
     * // Delete one RelayClient
     * const RelayClient = await prisma.relayClient.delete({
     *   where: {
     *     // ... filter to delete one RelayClient
     *   }
     * })
     * 
    **/
    delete<T extends RelayClientDeleteArgs>(
      args: SelectSubset<T, RelayClientDeleteArgs>
    ): CheckSelect<T, Prisma__RelayClientClient<RelayClient>, Prisma__RelayClientClient<RelayClientGetPayload<T>>>

    /**
     * Update one RelayClient.
     * @param {RelayClientUpdateArgs} args - Arguments to update one RelayClient.
     * @example
     * // Update one RelayClient
     * const relayClient = await prisma.relayClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RelayClientUpdateArgs>(
      args: SelectSubset<T, RelayClientUpdateArgs>
    ): CheckSelect<T, Prisma__RelayClientClient<RelayClient>, Prisma__RelayClientClient<RelayClientGetPayload<T>>>

    /**
     * Delete zero or more RelayClients.
     * @param {RelayClientDeleteManyArgs} args - Arguments to filter RelayClients to delete.
     * @example
     * // Delete a few RelayClients
     * const { count } = await prisma.relayClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RelayClientDeleteManyArgs>(
      args?: SelectSubset<T, RelayClientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelayClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelayClients
     * const relayClient = await prisma.relayClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RelayClientUpdateManyArgs>(
      args: SelectSubset<T, RelayClientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RelayClient.
     * @param {RelayClientUpsertArgs} args - Arguments to update or create a RelayClient.
     * @example
     * // Update or create a RelayClient
     * const relayClient = await prisma.relayClient.upsert({
     *   create: {
     *     // ... data to create a RelayClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelayClient we want to update
     *   }
     * })
    **/
    upsert<T extends RelayClientUpsertArgs>(
      args: SelectSubset<T, RelayClientUpsertArgs>
    ): CheckSelect<T, Prisma__RelayClientClient<RelayClient>, Prisma__RelayClientClient<RelayClientGetPayload<T>>>

    /**
     * Count the number of RelayClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientCountArgs} args - Arguments to filter RelayClients to count.
     * @example
     * // Count the number of RelayClients
     * const count = await prisma.relayClient.count({
     *   where: {
     *     // ... the filter for the RelayClients we want to count
     *   }
     * })
    **/
    count<T extends RelayClientCountArgs>(
      args?: Subset<T, RelayClientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelayClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelayClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelayClientAggregateArgs>(args: Subset<T, RelayClientAggregateArgs>): PrismaPromise<GetRelayClientAggregateType<T>>

    /**
     * Group by RelayClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelayClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelayClientGroupByArgs['orderBy'] }
        : { orderBy?: RelayClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelayClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelayClientGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelayClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RelayClientClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    group<T extends RelayGroupArgs = {}>(args?: Subset<T, RelayGroupArgs>): CheckSelect<T, Prisma__RelayGroupClient<RelayGroup | null >, Prisma__RelayGroupClient<RelayGroupGetPayload<T> | null >>;

    messages<T extends RelayClientMessageFindManyArgs = {}>(args?: Subset<T, RelayClientMessageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RelayClientMessage>>, PrismaPromise<Array<RelayClientMessageGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RelayClient findUnique
   */
  export type RelayClientFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the RelayClient
     * 
    **/
    select?: RelayClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientInclude | null
    /**
     * Throw an Error if a RelayClient can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RelayClient to fetch.
     * 
    **/
    where: RelayClientWhereUniqueInput
  }


  /**
   * RelayClient findFirst
   */
  export type RelayClientFindFirstArgs = {
    /**
     * Select specific fields to fetch from the RelayClient
     * 
    **/
    select?: RelayClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientInclude | null
    /**
     * Throw an Error if a RelayClient can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RelayClient to fetch.
     * 
    **/
    where?: RelayClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayClients to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelayClients.
     * 
    **/
    cursor?: RelayClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayClients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayClients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelayClients.
     * 
    **/
    distinct?: Enumerable<RelayClientScalarFieldEnum>
  }


  /**
   * RelayClient findMany
   */
  export type RelayClientFindManyArgs = {
    /**
     * Select specific fields to fetch from the RelayClient
     * 
    **/
    select?: RelayClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientInclude | null
    /**
     * Filter, which RelayClients to fetch.
     * 
    **/
    where?: RelayClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayClients to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelayClients.
     * 
    **/
    cursor?: RelayClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayClients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayClients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RelayClientScalarFieldEnum>
  }


  /**
   * RelayClient create
   */
  export type RelayClientCreateArgs = {
    /**
     * Select specific fields to fetch from the RelayClient
     * 
    **/
    select?: RelayClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientInclude | null
    /**
     * The data needed to create a RelayClient.
     * 
    **/
    data: XOR<RelayClientCreateInput, RelayClientUncheckedCreateInput>
  }


  /**
   * RelayClient update
   */
  export type RelayClientUpdateArgs = {
    /**
     * Select specific fields to fetch from the RelayClient
     * 
    **/
    select?: RelayClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientInclude | null
    /**
     * The data needed to update a RelayClient.
     * 
    **/
    data: XOR<RelayClientUpdateInput, RelayClientUncheckedUpdateInput>
    /**
     * Choose, which RelayClient to update.
     * 
    **/
    where: RelayClientWhereUniqueInput
  }


  /**
   * RelayClient updateMany
   */
  export type RelayClientUpdateManyArgs = {
    /**
     * The data used to update RelayClients.
     * 
    **/
    data: XOR<RelayClientUpdateManyMutationInput, RelayClientUncheckedUpdateManyInput>
    /**
     * Filter which RelayClients to update
     * 
    **/
    where?: RelayClientWhereInput
  }


  /**
   * RelayClient upsert
   */
  export type RelayClientUpsertArgs = {
    /**
     * Select specific fields to fetch from the RelayClient
     * 
    **/
    select?: RelayClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientInclude | null
    /**
     * The filter to search for the RelayClient to update in case it exists.
     * 
    **/
    where: RelayClientWhereUniqueInput
    /**
     * In case the RelayClient found by the `where` argument doesn't exist, create a new RelayClient with this data.
     * 
    **/
    create: XOR<RelayClientCreateInput, RelayClientUncheckedCreateInput>
    /**
     * In case the RelayClient was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RelayClientUpdateInput, RelayClientUncheckedUpdateInput>
  }


  /**
   * RelayClient delete
   */
  export type RelayClientDeleteArgs = {
    /**
     * Select specific fields to fetch from the RelayClient
     * 
    **/
    select?: RelayClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientInclude | null
    /**
     * Filter which RelayClient to delete.
     * 
    **/
    where: RelayClientWhereUniqueInput
  }


  /**
   * RelayClient deleteMany
   */
  export type RelayClientDeleteManyArgs = {
    /**
     * Filter which RelayClients to delete
     * 
    **/
    where?: RelayClientWhereInput
  }


  /**
   * RelayClient without action
   */
  export type RelayClientArgs = {
    /**
     * Select specific fields to fetch from the RelayClient
     * 
    **/
    select?: RelayClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientInclude | null
  }



  /**
   * Model RelayGroup
   */


  export type AggregateRelayGroup = {
    _count: RelayGroupCountAggregateOutputType | null
    _avg: RelayGroupAvgAggregateOutputType | null
    _sum: RelayGroupSumAggregateOutputType | null
    _min: RelayGroupMinAggregateOutputType | null
    _max: RelayGroupMaxAggregateOutputType | null
  }

  export type RelayGroupAvgAggregateOutputType = {
    id: number | null
  }

  export type RelayGroupSumAggregateOutputType = {
    id: number | null
  }

  export type RelayGroupMinAggregateOutputType = {
    id: number | null
  }

  export type RelayGroupMaxAggregateOutputType = {
    id: number | null
  }

  export type RelayGroupCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type RelayGroupAvgAggregateInputType = {
    id?: true
  }

  export type RelayGroupSumAggregateInputType = {
    id?: true
  }

  export type RelayGroupMinAggregateInputType = {
    id?: true
  }

  export type RelayGroupMaxAggregateInputType = {
    id?: true
  }

  export type RelayGroupCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type RelayGroupAggregateArgs = {
    /**
     * Filter which RelayGroup to aggregate.
     * 
    **/
    where?: RelayGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayGroups to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RelayGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayGroups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayGroups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelayGroups
    **/
    _count?: true | RelayGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelayGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelayGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelayGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelayGroupMaxAggregateInputType
  }

  export type GetRelayGroupAggregateType<T extends RelayGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateRelayGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelayGroup[P]>
      : GetScalarType<T[P], AggregateRelayGroup[P]>
  }




  export type RelayGroupGroupByArgs = {
    where?: RelayGroupWhereInput
    orderBy?: Enumerable<RelayGroupOrderByWithAggregationInput>
    by: Array<RelayGroupScalarFieldEnum>
    having?: RelayGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelayGroupCountAggregateInputType | true
    _avg?: RelayGroupAvgAggregateInputType
    _sum?: RelayGroupSumAggregateInputType
    _min?: RelayGroupMinAggregateInputType
    _max?: RelayGroupMaxAggregateInputType
  }


  export type RelayGroupGroupByOutputType = {
    id: number
    _count: RelayGroupCountAggregateOutputType | null
    _avg: RelayGroupAvgAggregateOutputType | null
    _sum: RelayGroupSumAggregateOutputType | null
    _min: RelayGroupMinAggregateOutputType | null
    _max: RelayGroupMaxAggregateOutputType | null
  }

  type GetRelayGroupGroupByPayload<T extends RelayGroupGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RelayGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelayGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelayGroupGroupByOutputType[P]>
            : GetScalarType<T[P], RelayGroupGroupByOutputType[P]>
        }
      >
    >


  export type RelayGroupSelect = {
    id?: boolean
    clients?: boolean | RelayClientFindManyArgs
    _count?: boolean | RelayGroupCountOutputTypeArgs
  }

  export type RelayGroupInclude = {
    clients?: boolean | RelayClientFindManyArgs
    _count?: boolean | RelayGroupCountOutputTypeArgs
  }

  export type RelayGroupGetPayload<
    S extends boolean | null | undefined | RelayGroupArgs,
    U = keyof S
      > = S extends true
        ? RelayGroup
    : S extends undefined
    ? never
    : S extends RelayGroupArgs | RelayGroupFindManyArgs
    ?'include' extends U
    ? RelayGroup  & {
    [P in TrueKeys<S['include']>]:
        P extends 'clients' ? Array < RelayClientGetPayload<S['include'][P]>>  :
        P extends '_count' ? RelayGroupCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'clients' ? Array < RelayClientGetPayload<S['select'][P]>>  :
        P extends '_count' ? RelayGroupCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RelayGroup ? RelayGroup[P] : never
  } 
    : RelayGroup
  : RelayGroup


  type RelayGroupCountArgs = Merge<
    Omit<RelayGroupFindManyArgs, 'select' | 'include'> & {
      select?: RelayGroupCountAggregateInputType | true
    }
  >

  export interface RelayGroupDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RelayGroup that matches the filter.
     * @param {RelayGroupFindUniqueArgs} args - Arguments to find a RelayGroup
     * @example
     * // Get one RelayGroup
     * const relayGroup = await prisma.relayGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RelayGroupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RelayGroupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RelayGroup'> extends True ? CheckSelect<T, Prisma__RelayGroupClient<RelayGroup>, Prisma__RelayGroupClient<RelayGroupGetPayload<T>>> : CheckSelect<T, Prisma__RelayGroupClient<RelayGroup | null >, Prisma__RelayGroupClient<RelayGroupGetPayload<T> | null >>

    /**
     * Find the first RelayGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayGroupFindFirstArgs} args - Arguments to find a RelayGroup
     * @example
     * // Get one RelayGroup
     * const relayGroup = await prisma.relayGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RelayGroupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RelayGroupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RelayGroup'> extends True ? CheckSelect<T, Prisma__RelayGroupClient<RelayGroup>, Prisma__RelayGroupClient<RelayGroupGetPayload<T>>> : CheckSelect<T, Prisma__RelayGroupClient<RelayGroup | null >, Prisma__RelayGroupClient<RelayGroupGetPayload<T> | null >>

    /**
     * Find zero or more RelayGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelayGroups
     * const relayGroups = await prisma.relayGroup.findMany()
     * 
     * // Get first 10 RelayGroups
     * const relayGroups = await prisma.relayGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relayGroupWithIdOnly = await prisma.relayGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RelayGroupFindManyArgs>(
      args?: SelectSubset<T, RelayGroupFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RelayGroup>>, PrismaPromise<Array<RelayGroupGetPayload<T>>>>

    /**
     * Create a RelayGroup.
     * @param {RelayGroupCreateArgs} args - Arguments to create a RelayGroup.
     * @example
     * // Create one RelayGroup
     * const RelayGroup = await prisma.relayGroup.create({
     *   data: {
     *     // ... data to create a RelayGroup
     *   }
     * })
     * 
    **/
    create<T extends RelayGroupCreateArgs>(
      args: SelectSubset<T, RelayGroupCreateArgs>
    ): CheckSelect<T, Prisma__RelayGroupClient<RelayGroup>, Prisma__RelayGroupClient<RelayGroupGetPayload<T>>>

    /**
     * Delete a RelayGroup.
     * @param {RelayGroupDeleteArgs} args - Arguments to delete one RelayGroup.
     * @example
     * // Delete one RelayGroup
     * const RelayGroup = await prisma.relayGroup.delete({
     *   where: {
     *     // ... filter to delete one RelayGroup
     *   }
     * })
     * 
    **/
    delete<T extends RelayGroupDeleteArgs>(
      args: SelectSubset<T, RelayGroupDeleteArgs>
    ): CheckSelect<T, Prisma__RelayGroupClient<RelayGroup>, Prisma__RelayGroupClient<RelayGroupGetPayload<T>>>

    /**
     * Update one RelayGroup.
     * @param {RelayGroupUpdateArgs} args - Arguments to update one RelayGroup.
     * @example
     * // Update one RelayGroup
     * const relayGroup = await prisma.relayGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RelayGroupUpdateArgs>(
      args: SelectSubset<T, RelayGroupUpdateArgs>
    ): CheckSelect<T, Prisma__RelayGroupClient<RelayGroup>, Prisma__RelayGroupClient<RelayGroupGetPayload<T>>>

    /**
     * Delete zero or more RelayGroups.
     * @param {RelayGroupDeleteManyArgs} args - Arguments to filter RelayGroups to delete.
     * @example
     * // Delete a few RelayGroups
     * const { count } = await prisma.relayGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RelayGroupDeleteManyArgs>(
      args?: SelectSubset<T, RelayGroupDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelayGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelayGroups
     * const relayGroup = await prisma.relayGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RelayGroupUpdateManyArgs>(
      args: SelectSubset<T, RelayGroupUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RelayGroup.
     * @param {RelayGroupUpsertArgs} args - Arguments to update or create a RelayGroup.
     * @example
     * // Update or create a RelayGroup
     * const relayGroup = await prisma.relayGroup.upsert({
     *   create: {
     *     // ... data to create a RelayGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelayGroup we want to update
     *   }
     * })
    **/
    upsert<T extends RelayGroupUpsertArgs>(
      args: SelectSubset<T, RelayGroupUpsertArgs>
    ): CheckSelect<T, Prisma__RelayGroupClient<RelayGroup>, Prisma__RelayGroupClient<RelayGroupGetPayload<T>>>

    /**
     * Count the number of RelayGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayGroupCountArgs} args - Arguments to filter RelayGroups to count.
     * @example
     * // Count the number of RelayGroups
     * const count = await prisma.relayGroup.count({
     *   where: {
     *     // ... the filter for the RelayGroups we want to count
     *   }
     * })
    **/
    count<T extends RelayGroupCountArgs>(
      args?: Subset<T, RelayGroupCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelayGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelayGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelayGroupAggregateArgs>(args: Subset<T, RelayGroupAggregateArgs>): PrismaPromise<GetRelayGroupAggregateType<T>>

    /**
     * Group by RelayGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelayGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelayGroupGroupByArgs['orderBy'] }
        : { orderBy?: RelayGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelayGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelayGroupGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelayGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RelayGroupClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    clients<T extends RelayClientFindManyArgs = {}>(args?: Subset<T, RelayClientFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RelayClient>>, PrismaPromise<Array<RelayClientGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RelayGroup findUnique
   */
  export type RelayGroupFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the RelayGroup
     * 
    **/
    select?: RelayGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayGroupInclude | null
    /**
     * Throw an Error if a RelayGroup can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RelayGroup to fetch.
     * 
    **/
    where: RelayGroupWhereUniqueInput
  }


  /**
   * RelayGroup findFirst
   */
  export type RelayGroupFindFirstArgs = {
    /**
     * Select specific fields to fetch from the RelayGroup
     * 
    **/
    select?: RelayGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayGroupInclude | null
    /**
     * Throw an Error if a RelayGroup can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RelayGroup to fetch.
     * 
    **/
    where?: RelayGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayGroups to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelayGroups.
     * 
    **/
    cursor?: RelayGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayGroups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayGroups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelayGroups.
     * 
    **/
    distinct?: Enumerable<RelayGroupScalarFieldEnum>
  }


  /**
   * RelayGroup findMany
   */
  export type RelayGroupFindManyArgs = {
    /**
     * Select specific fields to fetch from the RelayGroup
     * 
    **/
    select?: RelayGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayGroupInclude | null
    /**
     * Filter, which RelayGroups to fetch.
     * 
    **/
    where?: RelayGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayGroups to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelayGroups.
     * 
    **/
    cursor?: RelayGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayGroups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayGroups.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RelayGroupScalarFieldEnum>
  }


  /**
   * RelayGroup create
   */
  export type RelayGroupCreateArgs = {
    /**
     * Select specific fields to fetch from the RelayGroup
     * 
    **/
    select?: RelayGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayGroupInclude | null
    /**
     * The data needed to create a RelayGroup.
     * 
    **/
    data: XOR<RelayGroupCreateInput, RelayGroupUncheckedCreateInput>
  }


  /**
   * RelayGroup update
   */
  export type RelayGroupUpdateArgs = {
    /**
     * Select specific fields to fetch from the RelayGroup
     * 
    **/
    select?: RelayGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayGroupInclude | null
    /**
     * The data needed to update a RelayGroup.
     * 
    **/
    data: XOR<RelayGroupUpdateInput, RelayGroupUncheckedUpdateInput>
    /**
     * Choose, which RelayGroup to update.
     * 
    **/
    where: RelayGroupWhereUniqueInput
  }


  /**
   * RelayGroup updateMany
   */
  export type RelayGroupUpdateManyArgs = {
    /**
     * The data used to update RelayGroups.
     * 
    **/
    data: XOR<RelayGroupUpdateManyMutationInput, RelayGroupUncheckedUpdateManyInput>
    /**
     * Filter which RelayGroups to update
     * 
    **/
    where?: RelayGroupWhereInput
  }


  /**
   * RelayGroup upsert
   */
  export type RelayGroupUpsertArgs = {
    /**
     * Select specific fields to fetch from the RelayGroup
     * 
    **/
    select?: RelayGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayGroupInclude | null
    /**
     * The filter to search for the RelayGroup to update in case it exists.
     * 
    **/
    where: RelayGroupWhereUniqueInput
    /**
     * In case the RelayGroup found by the `where` argument doesn't exist, create a new RelayGroup with this data.
     * 
    **/
    create: XOR<RelayGroupCreateInput, RelayGroupUncheckedCreateInput>
    /**
     * In case the RelayGroup was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RelayGroupUpdateInput, RelayGroupUncheckedUpdateInput>
  }


  /**
   * RelayGroup delete
   */
  export type RelayGroupDeleteArgs = {
    /**
     * Select specific fields to fetch from the RelayGroup
     * 
    **/
    select?: RelayGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayGroupInclude | null
    /**
     * Filter which RelayGroup to delete.
     * 
    **/
    where: RelayGroupWhereUniqueInput
  }


  /**
   * RelayGroup deleteMany
   */
  export type RelayGroupDeleteManyArgs = {
    /**
     * Filter which RelayGroups to delete
     * 
    **/
    where?: RelayGroupWhereInput
  }


  /**
   * RelayGroup without action
   */
  export type RelayGroupArgs = {
    /**
     * Select specific fields to fetch from the RelayGroup
     * 
    **/
    select?: RelayGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayGroupInclude | null
  }



  /**
   * Model RelayClientMessage
   */


  export type AggregateRelayClientMessage = {
    _count: RelayClientMessageCountAggregateOutputType | null
    _avg: RelayClientMessageAvgAggregateOutputType | null
    _sum: RelayClientMessageSumAggregateOutputType | null
    _min: RelayClientMessageMinAggregateOutputType | null
    _max: RelayClientMessageMaxAggregateOutputType | null
  }

  export type RelayClientMessageAvgAggregateOutputType = {
    id: number | null
  }

  export type RelayClientMessageSumAggregateOutputType = {
    id: number | null
  }

  export type RelayClientMessageMinAggregateOutputType = {
    id: number | null
    clientId: string | null
    message: string | null
  }

  export type RelayClientMessageMaxAggregateOutputType = {
    id: number | null
    clientId: string | null
    message: string | null
  }

  export type RelayClientMessageCountAggregateOutputType = {
    id: number
    clientId: number
    message: number
    _all: number
  }


  export type RelayClientMessageAvgAggregateInputType = {
    id?: true
  }

  export type RelayClientMessageSumAggregateInputType = {
    id?: true
  }

  export type RelayClientMessageMinAggregateInputType = {
    id?: true
    clientId?: true
    message?: true
  }

  export type RelayClientMessageMaxAggregateInputType = {
    id?: true
    clientId?: true
    message?: true
  }

  export type RelayClientMessageCountAggregateInputType = {
    id?: true
    clientId?: true
    message?: true
    _all?: true
  }

  export type RelayClientMessageAggregateArgs = {
    /**
     * Filter which RelayClientMessage to aggregate.
     * 
    **/
    where?: RelayClientMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayClientMessages to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayClientMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RelayClientMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayClientMessages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayClientMessages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelayClientMessages
    **/
    _count?: true | RelayClientMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelayClientMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelayClientMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelayClientMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelayClientMessageMaxAggregateInputType
  }

  export type GetRelayClientMessageAggregateType<T extends RelayClientMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateRelayClientMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelayClientMessage[P]>
      : GetScalarType<T[P], AggregateRelayClientMessage[P]>
  }




  export type RelayClientMessageGroupByArgs = {
    where?: RelayClientMessageWhereInput
    orderBy?: Enumerable<RelayClientMessageOrderByWithAggregationInput>
    by: Array<RelayClientMessageScalarFieldEnum>
    having?: RelayClientMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelayClientMessageCountAggregateInputType | true
    _avg?: RelayClientMessageAvgAggregateInputType
    _sum?: RelayClientMessageSumAggregateInputType
    _min?: RelayClientMessageMinAggregateInputType
    _max?: RelayClientMessageMaxAggregateInputType
  }


  export type RelayClientMessageGroupByOutputType = {
    id: number
    clientId: string
    message: string
    _count: RelayClientMessageCountAggregateOutputType | null
    _avg: RelayClientMessageAvgAggregateOutputType | null
    _sum: RelayClientMessageSumAggregateOutputType | null
    _min: RelayClientMessageMinAggregateOutputType | null
    _max: RelayClientMessageMaxAggregateOutputType | null
  }

  type GetRelayClientMessageGroupByPayload<T extends RelayClientMessageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RelayClientMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelayClientMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelayClientMessageGroupByOutputType[P]>
            : GetScalarType<T[P], RelayClientMessageGroupByOutputType[P]>
        }
      >
    >


  export type RelayClientMessageSelect = {
    id?: boolean
    clientId?: boolean
    client?: boolean | RelayClientArgs
    message?: boolean
  }

  export type RelayClientMessageInclude = {
    client?: boolean | RelayClientArgs
  }

  export type RelayClientMessageGetPayload<
    S extends boolean | null | undefined | RelayClientMessageArgs,
    U = keyof S
      > = S extends true
        ? RelayClientMessage
    : S extends undefined
    ? never
    : S extends RelayClientMessageArgs | RelayClientMessageFindManyArgs
    ?'include' extends U
    ? RelayClientMessage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'client' ? RelayClientGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'client' ? RelayClientGetPayload<S['select'][P]> :  P extends keyof RelayClientMessage ? RelayClientMessage[P] : never
  } 
    : RelayClientMessage
  : RelayClientMessage


  type RelayClientMessageCountArgs = Merge<
    Omit<RelayClientMessageFindManyArgs, 'select' | 'include'> & {
      select?: RelayClientMessageCountAggregateInputType | true
    }
  >

  export interface RelayClientMessageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RelayClientMessage that matches the filter.
     * @param {RelayClientMessageFindUniqueArgs} args - Arguments to find a RelayClientMessage
     * @example
     * // Get one RelayClientMessage
     * const relayClientMessage = await prisma.relayClientMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RelayClientMessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RelayClientMessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RelayClientMessage'> extends True ? CheckSelect<T, Prisma__RelayClientMessageClient<RelayClientMessage>, Prisma__RelayClientMessageClient<RelayClientMessageGetPayload<T>>> : CheckSelect<T, Prisma__RelayClientMessageClient<RelayClientMessage | null >, Prisma__RelayClientMessageClient<RelayClientMessageGetPayload<T> | null >>

    /**
     * Find the first RelayClientMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientMessageFindFirstArgs} args - Arguments to find a RelayClientMessage
     * @example
     * // Get one RelayClientMessage
     * const relayClientMessage = await prisma.relayClientMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RelayClientMessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RelayClientMessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RelayClientMessage'> extends True ? CheckSelect<T, Prisma__RelayClientMessageClient<RelayClientMessage>, Prisma__RelayClientMessageClient<RelayClientMessageGetPayload<T>>> : CheckSelect<T, Prisma__RelayClientMessageClient<RelayClientMessage | null >, Prisma__RelayClientMessageClient<RelayClientMessageGetPayload<T> | null >>

    /**
     * Find zero or more RelayClientMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelayClientMessages
     * const relayClientMessages = await prisma.relayClientMessage.findMany()
     * 
     * // Get first 10 RelayClientMessages
     * const relayClientMessages = await prisma.relayClientMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relayClientMessageWithIdOnly = await prisma.relayClientMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RelayClientMessageFindManyArgs>(
      args?: SelectSubset<T, RelayClientMessageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RelayClientMessage>>, PrismaPromise<Array<RelayClientMessageGetPayload<T>>>>

    /**
     * Create a RelayClientMessage.
     * @param {RelayClientMessageCreateArgs} args - Arguments to create a RelayClientMessage.
     * @example
     * // Create one RelayClientMessage
     * const RelayClientMessage = await prisma.relayClientMessage.create({
     *   data: {
     *     // ... data to create a RelayClientMessage
     *   }
     * })
     * 
    **/
    create<T extends RelayClientMessageCreateArgs>(
      args: SelectSubset<T, RelayClientMessageCreateArgs>
    ): CheckSelect<T, Prisma__RelayClientMessageClient<RelayClientMessage>, Prisma__RelayClientMessageClient<RelayClientMessageGetPayload<T>>>

    /**
     * Delete a RelayClientMessage.
     * @param {RelayClientMessageDeleteArgs} args - Arguments to delete one RelayClientMessage.
     * @example
     * // Delete one RelayClientMessage
     * const RelayClientMessage = await prisma.relayClientMessage.delete({
     *   where: {
     *     // ... filter to delete one RelayClientMessage
     *   }
     * })
     * 
    **/
    delete<T extends RelayClientMessageDeleteArgs>(
      args: SelectSubset<T, RelayClientMessageDeleteArgs>
    ): CheckSelect<T, Prisma__RelayClientMessageClient<RelayClientMessage>, Prisma__RelayClientMessageClient<RelayClientMessageGetPayload<T>>>

    /**
     * Update one RelayClientMessage.
     * @param {RelayClientMessageUpdateArgs} args - Arguments to update one RelayClientMessage.
     * @example
     * // Update one RelayClientMessage
     * const relayClientMessage = await prisma.relayClientMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RelayClientMessageUpdateArgs>(
      args: SelectSubset<T, RelayClientMessageUpdateArgs>
    ): CheckSelect<T, Prisma__RelayClientMessageClient<RelayClientMessage>, Prisma__RelayClientMessageClient<RelayClientMessageGetPayload<T>>>

    /**
     * Delete zero or more RelayClientMessages.
     * @param {RelayClientMessageDeleteManyArgs} args - Arguments to filter RelayClientMessages to delete.
     * @example
     * // Delete a few RelayClientMessages
     * const { count } = await prisma.relayClientMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RelayClientMessageDeleteManyArgs>(
      args?: SelectSubset<T, RelayClientMessageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelayClientMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelayClientMessages
     * const relayClientMessage = await prisma.relayClientMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RelayClientMessageUpdateManyArgs>(
      args: SelectSubset<T, RelayClientMessageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RelayClientMessage.
     * @param {RelayClientMessageUpsertArgs} args - Arguments to update or create a RelayClientMessage.
     * @example
     * // Update or create a RelayClientMessage
     * const relayClientMessage = await prisma.relayClientMessage.upsert({
     *   create: {
     *     // ... data to create a RelayClientMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelayClientMessage we want to update
     *   }
     * })
    **/
    upsert<T extends RelayClientMessageUpsertArgs>(
      args: SelectSubset<T, RelayClientMessageUpsertArgs>
    ): CheckSelect<T, Prisma__RelayClientMessageClient<RelayClientMessage>, Prisma__RelayClientMessageClient<RelayClientMessageGetPayload<T>>>

    /**
     * Count the number of RelayClientMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientMessageCountArgs} args - Arguments to filter RelayClientMessages to count.
     * @example
     * // Count the number of RelayClientMessages
     * const count = await prisma.relayClientMessage.count({
     *   where: {
     *     // ... the filter for the RelayClientMessages we want to count
     *   }
     * })
    **/
    count<T extends RelayClientMessageCountArgs>(
      args?: Subset<T, RelayClientMessageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelayClientMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelayClientMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelayClientMessageAggregateArgs>(args: Subset<T, RelayClientMessageAggregateArgs>): PrismaPromise<GetRelayClientMessageAggregateType<T>>

    /**
     * Group by RelayClientMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelayClientMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelayClientMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelayClientMessageGroupByArgs['orderBy'] }
        : { orderBy?: RelayClientMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelayClientMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelayClientMessageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelayClientMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RelayClientMessageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    client<T extends RelayClientArgs = {}>(args?: Subset<T, RelayClientArgs>): CheckSelect<T, Prisma__RelayClientClient<RelayClient | null >, Prisma__RelayClientClient<RelayClientGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RelayClientMessage findUnique
   */
  export type RelayClientMessageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the RelayClientMessage
     * 
    **/
    select?: RelayClientMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientMessageInclude | null
    /**
     * Throw an Error if a RelayClientMessage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RelayClientMessage to fetch.
     * 
    **/
    where: RelayClientMessageWhereUniqueInput
  }


  /**
   * RelayClientMessage findFirst
   */
  export type RelayClientMessageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the RelayClientMessage
     * 
    **/
    select?: RelayClientMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientMessageInclude | null
    /**
     * Throw an Error if a RelayClientMessage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RelayClientMessage to fetch.
     * 
    **/
    where?: RelayClientMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayClientMessages to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayClientMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelayClientMessages.
     * 
    **/
    cursor?: RelayClientMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayClientMessages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayClientMessages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelayClientMessages.
     * 
    **/
    distinct?: Enumerable<RelayClientMessageScalarFieldEnum>
  }


  /**
   * RelayClientMessage findMany
   */
  export type RelayClientMessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the RelayClientMessage
     * 
    **/
    select?: RelayClientMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientMessageInclude | null
    /**
     * Filter, which RelayClientMessages to fetch.
     * 
    **/
    where?: RelayClientMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelayClientMessages to fetch.
     * 
    **/
    orderBy?: Enumerable<RelayClientMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelayClientMessages.
     * 
    **/
    cursor?: RelayClientMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelayClientMessages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelayClientMessages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RelayClientMessageScalarFieldEnum>
  }


  /**
   * RelayClientMessage create
   */
  export type RelayClientMessageCreateArgs = {
    /**
     * Select specific fields to fetch from the RelayClientMessage
     * 
    **/
    select?: RelayClientMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientMessageInclude | null
    /**
     * The data needed to create a RelayClientMessage.
     * 
    **/
    data: XOR<RelayClientMessageCreateInput, RelayClientMessageUncheckedCreateInput>
  }


  /**
   * RelayClientMessage update
   */
  export type RelayClientMessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the RelayClientMessage
     * 
    **/
    select?: RelayClientMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientMessageInclude | null
    /**
     * The data needed to update a RelayClientMessage.
     * 
    **/
    data: XOR<RelayClientMessageUpdateInput, RelayClientMessageUncheckedUpdateInput>
    /**
     * Choose, which RelayClientMessage to update.
     * 
    **/
    where: RelayClientMessageWhereUniqueInput
  }


  /**
   * RelayClientMessage updateMany
   */
  export type RelayClientMessageUpdateManyArgs = {
    /**
     * The data used to update RelayClientMessages.
     * 
    **/
    data: XOR<RelayClientMessageUpdateManyMutationInput, RelayClientMessageUncheckedUpdateManyInput>
    /**
     * Filter which RelayClientMessages to update
     * 
    **/
    where?: RelayClientMessageWhereInput
  }


  /**
   * RelayClientMessage upsert
   */
  export type RelayClientMessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the RelayClientMessage
     * 
    **/
    select?: RelayClientMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientMessageInclude | null
    /**
     * The filter to search for the RelayClientMessage to update in case it exists.
     * 
    **/
    where: RelayClientMessageWhereUniqueInput
    /**
     * In case the RelayClientMessage found by the `where` argument doesn't exist, create a new RelayClientMessage with this data.
     * 
    **/
    create: XOR<RelayClientMessageCreateInput, RelayClientMessageUncheckedCreateInput>
    /**
     * In case the RelayClientMessage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RelayClientMessageUpdateInput, RelayClientMessageUncheckedUpdateInput>
  }


  /**
   * RelayClientMessage delete
   */
  export type RelayClientMessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the RelayClientMessage
     * 
    **/
    select?: RelayClientMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientMessageInclude | null
    /**
     * Filter which RelayClientMessage to delete.
     * 
    **/
    where: RelayClientMessageWhereUniqueInput
  }


  /**
   * RelayClientMessage deleteMany
   */
  export type RelayClientMessageDeleteManyArgs = {
    /**
     * Filter which RelayClientMessages to delete
     * 
    **/
    where?: RelayClientMessageWhereInput
  }


  /**
   * RelayClientMessage without action
   */
  export type RelayClientMessageArgs = {
    /**
     * Select specific fields to fetch from the RelayClientMessage
     * 
    **/
    select?: RelayClientMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelayClientMessageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const RelayClientScalarFieldEnum: {
    id: 'id',
    lastPing: 'lastPing',
    groupId: 'groupId'
  };

  export type RelayClientScalarFieldEnum = (typeof RelayClientScalarFieldEnum)[keyof typeof RelayClientScalarFieldEnum]


  export const RelayGroupScalarFieldEnum: {
    id: 'id'
  };

  export type RelayGroupScalarFieldEnum = (typeof RelayGroupScalarFieldEnum)[keyof typeof RelayGroupScalarFieldEnum]


  export const RelayClientMessageScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    message: 'message'
  };

  export type RelayClientMessageScalarFieldEnum = (typeof RelayClientMessageScalarFieldEnum)[keyof typeof RelayClientMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type RelayClientWhereInput = {
    AND?: Enumerable<RelayClientWhereInput>
    OR?: Enumerable<RelayClientWhereInput>
    NOT?: Enumerable<RelayClientWhereInput>
    id?: StringFilter | string
    lastPing?: DateTimeFilter | Date | string
    group?: XOR<RelayGroupRelationFilter, RelayGroupWhereInput> | null
    groupId?: IntNullableFilter | number | null
    messages?: RelayClientMessageListRelationFilter
  }

  export type RelayClientOrderByWithRelationInput = {
    id?: SortOrder
    lastPing?: SortOrder
    group?: RelayGroupOrderByWithRelationInput
    groupId?: SortOrder
    messages?: RelayClientMessageOrderByRelationAggregateInput
  }

  export type RelayClientWhereUniqueInput = {
    id?: string
  }

  export type RelayClientOrderByWithAggregationInput = {
    id?: SortOrder
    lastPing?: SortOrder
    groupId?: SortOrder
    _count?: RelayClientCountOrderByAggregateInput
    _avg?: RelayClientAvgOrderByAggregateInput
    _max?: RelayClientMaxOrderByAggregateInput
    _min?: RelayClientMinOrderByAggregateInput
    _sum?: RelayClientSumOrderByAggregateInput
  }

  export type RelayClientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RelayClientScalarWhereWithAggregatesInput>
    OR?: Enumerable<RelayClientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RelayClientScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    lastPing?: DateTimeWithAggregatesFilter | Date | string
    groupId?: IntNullableWithAggregatesFilter | number | null
  }

  export type RelayGroupWhereInput = {
    AND?: Enumerable<RelayGroupWhereInput>
    OR?: Enumerable<RelayGroupWhereInput>
    NOT?: Enumerable<RelayGroupWhereInput>
    id?: IntFilter | number
    clients?: RelayClientListRelationFilter
  }

  export type RelayGroupOrderByWithRelationInput = {
    id?: SortOrder
    clients?: RelayClientOrderByRelationAggregateInput
  }

  export type RelayGroupWhereUniqueInput = {
    id?: number
  }

  export type RelayGroupOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: RelayGroupCountOrderByAggregateInput
    _avg?: RelayGroupAvgOrderByAggregateInput
    _max?: RelayGroupMaxOrderByAggregateInput
    _min?: RelayGroupMinOrderByAggregateInput
    _sum?: RelayGroupSumOrderByAggregateInput
  }

  export type RelayGroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RelayGroupScalarWhereWithAggregatesInput>
    OR?: Enumerable<RelayGroupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RelayGroupScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type RelayClientMessageWhereInput = {
    AND?: Enumerable<RelayClientMessageWhereInput>
    OR?: Enumerable<RelayClientMessageWhereInput>
    NOT?: Enumerable<RelayClientMessageWhereInput>
    id?: IntFilter | number
    clientId?: StringFilter | string
    client?: XOR<RelayClientRelationFilter, RelayClientWhereInput>
    message?: StringFilter | string
  }

  export type RelayClientMessageOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    client?: RelayClientOrderByWithRelationInput
    message?: SortOrder
  }

  export type RelayClientMessageWhereUniqueInput = {
    id?: number
  }

  export type RelayClientMessageOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    message?: SortOrder
    _count?: RelayClientMessageCountOrderByAggregateInput
    _avg?: RelayClientMessageAvgOrderByAggregateInput
    _max?: RelayClientMessageMaxOrderByAggregateInput
    _min?: RelayClientMessageMinOrderByAggregateInput
    _sum?: RelayClientMessageSumOrderByAggregateInput
  }

  export type RelayClientMessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RelayClientMessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<RelayClientMessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RelayClientMessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    clientId?: StringWithAggregatesFilter | string
    message?: StringWithAggregatesFilter | string
  }

  export type RelayClientCreateInput = {
    id: string
    lastPing?: Date | string
    group?: RelayGroupCreateNestedOneWithoutClientsInput
    messages?: RelayClientMessageCreateNestedManyWithoutClientInput
  }

  export type RelayClientUncheckedCreateInput = {
    id: string
    lastPing?: Date | string
    groupId?: number | null
    messages?: RelayClientMessageUncheckedCreateNestedManyWithoutClientInput
  }

  export type RelayClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: RelayGroupUpdateOneWithoutClientsInput
    messages?: RelayClientMessageUpdateManyWithoutClientInput
  }

  export type RelayClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: RelayClientMessageUncheckedUpdateManyWithoutClientInput
  }

  export type RelayClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelayClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RelayGroupCreateInput = {
    clients?: RelayClientCreateNestedManyWithoutGroupInput
  }

  export type RelayGroupUncheckedCreateInput = {
    id?: number
    clients?: RelayClientUncheckedCreateNestedManyWithoutGroupInput
  }

  export type RelayGroupUpdateInput = {
    clients?: RelayClientUpdateManyWithoutGroupInput
  }

  export type RelayGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clients?: RelayClientUncheckedUpdateManyWithoutGroupInput
  }

  export type RelayGroupUpdateManyMutationInput = {

  }

  export type RelayGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type RelayClientMessageCreateInput = {
    client: RelayClientCreateNestedOneWithoutMessagesInput
    message: string
  }

  export type RelayClientMessageUncheckedCreateInput = {
    id?: number
    clientId: string
    message: string
  }

  export type RelayClientMessageUpdateInput = {
    client?: RelayClientUpdateOneRequiredWithoutMessagesInput
    message?: StringFieldUpdateOperationsInput | string
  }

  export type RelayClientMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type RelayClientMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type RelayClientMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type RelayGroupRelationFilter = {
    is?: RelayGroupWhereInput | null
    isNot?: RelayGroupWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type RelayClientMessageListRelationFilter = {
    every?: RelayClientMessageWhereInput
    some?: RelayClientMessageWhereInput
    none?: RelayClientMessageWhereInput
  }

  export type RelayClientMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelayClientCountOrderByAggregateInput = {
    id?: SortOrder
    lastPing?: SortOrder
    groupId?: SortOrder
  }

  export type RelayClientAvgOrderByAggregateInput = {
    groupId?: SortOrder
  }

  export type RelayClientMaxOrderByAggregateInput = {
    id?: SortOrder
    lastPing?: SortOrder
    groupId?: SortOrder
  }

  export type RelayClientMinOrderByAggregateInput = {
    id?: SortOrder
    lastPing?: SortOrder
    groupId?: SortOrder
  }

  export type RelayClientSumOrderByAggregateInput = {
    groupId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type RelayClientListRelationFilter = {
    every?: RelayClientWhereInput
    some?: RelayClientWhereInput
    none?: RelayClientWhereInput
  }

  export type RelayClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelayGroupCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RelayGroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RelayGroupMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RelayGroupMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RelayGroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type RelayClientRelationFilter = {
    is?: RelayClientWhereInput
    isNot?: RelayClientWhereInput
  }

  export type RelayClientMessageCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    message?: SortOrder
  }

  export type RelayClientMessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RelayClientMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    message?: SortOrder
  }

  export type RelayClientMessageMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    message?: SortOrder
  }

  export type RelayClientMessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RelayGroupCreateNestedOneWithoutClientsInput = {
    create?: XOR<RelayGroupCreateWithoutClientsInput, RelayGroupUncheckedCreateWithoutClientsInput>
    connectOrCreate?: RelayGroupCreateOrConnectWithoutClientsInput
    connect?: RelayGroupWhereUniqueInput
  }

  export type RelayClientMessageCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<RelayClientMessageCreateWithoutClientInput>, Enumerable<RelayClientMessageUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<RelayClientMessageCreateOrConnectWithoutClientInput>
    connect?: Enumerable<RelayClientMessageWhereUniqueInput>
  }

  export type RelayClientMessageUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<RelayClientMessageCreateWithoutClientInput>, Enumerable<RelayClientMessageUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<RelayClientMessageCreateOrConnectWithoutClientInput>
    connect?: Enumerable<RelayClientMessageWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RelayGroupUpdateOneWithoutClientsInput = {
    create?: XOR<RelayGroupCreateWithoutClientsInput, RelayGroupUncheckedCreateWithoutClientsInput>
    connectOrCreate?: RelayGroupCreateOrConnectWithoutClientsInput
    upsert?: RelayGroupUpsertWithoutClientsInput
    disconnect?: boolean
    delete?: boolean
    connect?: RelayGroupWhereUniqueInput
    update?: XOR<RelayGroupUpdateWithoutClientsInput, RelayGroupUncheckedUpdateWithoutClientsInput>
  }

  export type RelayClientMessageUpdateManyWithoutClientInput = {
    create?: XOR<Enumerable<RelayClientMessageCreateWithoutClientInput>, Enumerable<RelayClientMessageUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<RelayClientMessageCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<RelayClientMessageUpsertWithWhereUniqueWithoutClientInput>
    set?: Enumerable<RelayClientMessageWhereUniqueInput>
    disconnect?: Enumerable<RelayClientMessageWhereUniqueInput>
    delete?: Enumerable<RelayClientMessageWhereUniqueInput>
    connect?: Enumerable<RelayClientMessageWhereUniqueInput>
    update?: Enumerable<RelayClientMessageUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<RelayClientMessageUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<RelayClientMessageScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RelayClientMessageUncheckedUpdateManyWithoutClientInput = {
    create?: XOR<Enumerable<RelayClientMessageCreateWithoutClientInput>, Enumerable<RelayClientMessageUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<RelayClientMessageCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<RelayClientMessageUpsertWithWhereUniqueWithoutClientInput>
    set?: Enumerable<RelayClientMessageWhereUniqueInput>
    disconnect?: Enumerable<RelayClientMessageWhereUniqueInput>
    delete?: Enumerable<RelayClientMessageWhereUniqueInput>
    connect?: Enumerable<RelayClientMessageWhereUniqueInput>
    update?: Enumerable<RelayClientMessageUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<RelayClientMessageUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<RelayClientMessageScalarWhereInput>
  }

  export type RelayClientCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<RelayClientCreateWithoutGroupInput>, Enumerable<RelayClientUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<RelayClientCreateOrConnectWithoutGroupInput>
    connect?: Enumerable<RelayClientWhereUniqueInput>
  }

  export type RelayClientUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<RelayClientCreateWithoutGroupInput>, Enumerable<RelayClientUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<RelayClientCreateOrConnectWithoutGroupInput>
    connect?: Enumerable<RelayClientWhereUniqueInput>
  }

  export type RelayClientUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<RelayClientCreateWithoutGroupInput>, Enumerable<RelayClientUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<RelayClientCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<RelayClientUpsertWithWhereUniqueWithoutGroupInput>
    set?: Enumerable<RelayClientWhereUniqueInput>
    disconnect?: Enumerable<RelayClientWhereUniqueInput>
    delete?: Enumerable<RelayClientWhereUniqueInput>
    connect?: Enumerable<RelayClientWhereUniqueInput>
    update?: Enumerable<RelayClientUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<RelayClientUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<RelayClientScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RelayClientUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<RelayClientCreateWithoutGroupInput>, Enumerable<RelayClientUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<RelayClientCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<RelayClientUpsertWithWhereUniqueWithoutGroupInput>
    set?: Enumerable<RelayClientWhereUniqueInput>
    disconnect?: Enumerable<RelayClientWhereUniqueInput>
    delete?: Enumerable<RelayClientWhereUniqueInput>
    connect?: Enumerable<RelayClientWhereUniqueInput>
    update?: Enumerable<RelayClientUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<RelayClientUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<RelayClientScalarWhereInput>
  }

  export type RelayClientCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RelayClientCreateWithoutMessagesInput, RelayClientUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RelayClientCreateOrConnectWithoutMessagesInput
    connect?: RelayClientWhereUniqueInput
  }

  export type RelayClientUpdateOneRequiredWithoutMessagesInput = {
    create?: XOR<RelayClientCreateWithoutMessagesInput, RelayClientUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RelayClientCreateOrConnectWithoutMessagesInput
    upsert?: RelayClientUpsertWithoutMessagesInput
    connect?: RelayClientWhereUniqueInput
    update?: XOR<RelayClientUpdateWithoutMessagesInput, RelayClientUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type RelayGroupCreateWithoutClientsInput = {

  }

  export type RelayGroupUncheckedCreateWithoutClientsInput = {
    id?: number
  }

  export type RelayGroupCreateOrConnectWithoutClientsInput = {
    where: RelayGroupWhereUniqueInput
    create: XOR<RelayGroupCreateWithoutClientsInput, RelayGroupUncheckedCreateWithoutClientsInput>
  }

  export type RelayClientMessageCreateWithoutClientInput = {
    message: string
  }

  export type RelayClientMessageUncheckedCreateWithoutClientInput = {
    id?: number
    message: string
  }

  export type RelayClientMessageCreateOrConnectWithoutClientInput = {
    where: RelayClientMessageWhereUniqueInput
    create: XOR<RelayClientMessageCreateWithoutClientInput, RelayClientMessageUncheckedCreateWithoutClientInput>
  }

  export type RelayGroupUpsertWithoutClientsInput = {
    update: XOR<RelayGroupUpdateWithoutClientsInput, RelayGroupUncheckedUpdateWithoutClientsInput>
    create: XOR<RelayGroupCreateWithoutClientsInput, RelayGroupUncheckedCreateWithoutClientsInput>
  }

  export type RelayGroupUpdateWithoutClientsInput = {

  }

  export type RelayGroupUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type RelayClientMessageUpsertWithWhereUniqueWithoutClientInput = {
    where: RelayClientMessageWhereUniqueInput
    update: XOR<RelayClientMessageUpdateWithoutClientInput, RelayClientMessageUncheckedUpdateWithoutClientInput>
    create: XOR<RelayClientMessageCreateWithoutClientInput, RelayClientMessageUncheckedCreateWithoutClientInput>
  }

  export type RelayClientMessageUpdateWithWhereUniqueWithoutClientInput = {
    where: RelayClientMessageWhereUniqueInput
    data: XOR<RelayClientMessageUpdateWithoutClientInput, RelayClientMessageUncheckedUpdateWithoutClientInput>
  }

  export type RelayClientMessageUpdateManyWithWhereWithoutClientInput = {
    where: RelayClientMessageScalarWhereInput
    data: XOR<RelayClientMessageUpdateManyMutationInput, RelayClientMessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type RelayClientMessageScalarWhereInput = {
    AND?: Enumerable<RelayClientMessageScalarWhereInput>
    OR?: Enumerable<RelayClientMessageScalarWhereInput>
    NOT?: Enumerable<RelayClientMessageScalarWhereInput>
    id?: IntFilter | number
    clientId?: StringFilter | string
    message?: StringFilter | string
  }

  export type RelayClientCreateWithoutGroupInput = {
    id: string
    lastPing?: Date | string
    messages?: RelayClientMessageCreateNestedManyWithoutClientInput
  }

  export type RelayClientUncheckedCreateWithoutGroupInput = {
    id: string
    lastPing?: Date | string
    messages?: RelayClientMessageUncheckedCreateNestedManyWithoutClientInput
  }

  export type RelayClientCreateOrConnectWithoutGroupInput = {
    where: RelayClientWhereUniqueInput
    create: XOR<RelayClientCreateWithoutGroupInput, RelayClientUncheckedCreateWithoutGroupInput>
  }

  export type RelayClientUpsertWithWhereUniqueWithoutGroupInput = {
    where: RelayClientWhereUniqueInput
    update: XOR<RelayClientUpdateWithoutGroupInput, RelayClientUncheckedUpdateWithoutGroupInput>
    create: XOR<RelayClientCreateWithoutGroupInput, RelayClientUncheckedCreateWithoutGroupInput>
  }

  export type RelayClientUpdateWithWhereUniqueWithoutGroupInput = {
    where: RelayClientWhereUniqueInput
    data: XOR<RelayClientUpdateWithoutGroupInput, RelayClientUncheckedUpdateWithoutGroupInput>
  }

  export type RelayClientUpdateManyWithWhereWithoutGroupInput = {
    where: RelayClientScalarWhereInput
    data: XOR<RelayClientUpdateManyMutationInput, RelayClientUncheckedUpdateManyWithoutClientsInput>
  }

  export type RelayClientScalarWhereInput = {
    AND?: Enumerable<RelayClientScalarWhereInput>
    OR?: Enumerable<RelayClientScalarWhereInput>
    NOT?: Enumerable<RelayClientScalarWhereInput>
    id?: StringFilter | string
    lastPing?: DateTimeFilter | Date | string
    groupId?: IntNullableFilter | number | null
  }

  export type RelayClientCreateWithoutMessagesInput = {
    id: string
    lastPing?: Date | string
    group?: RelayGroupCreateNestedOneWithoutClientsInput
  }

  export type RelayClientUncheckedCreateWithoutMessagesInput = {
    id: string
    lastPing?: Date | string
    groupId?: number | null
  }

  export type RelayClientCreateOrConnectWithoutMessagesInput = {
    where: RelayClientWhereUniqueInput
    create: XOR<RelayClientCreateWithoutMessagesInput, RelayClientUncheckedCreateWithoutMessagesInput>
  }

  export type RelayClientUpsertWithoutMessagesInput = {
    update: XOR<RelayClientUpdateWithoutMessagesInput, RelayClientUncheckedUpdateWithoutMessagesInput>
    create: XOR<RelayClientCreateWithoutMessagesInput, RelayClientUncheckedCreateWithoutMessagesInput>
  }

  export type RelayClientUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: RelayGroupUpdateOneWithoutClientsInput
  }

  export type RelayClientUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RelayClientMessageUpdateWithoutClientInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type RelayClientMessageUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type RelayClientMessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type RelayClientUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: RelayClientMessageUpdateManyWithoutClientInput
  }

  export type RelayClientUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: RelayClientMessageUncheckedUpdateManyWithoutClientInput
  }

  export type RelayClientUncheckedUpdateManyWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastPing?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}