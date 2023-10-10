
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Producer
 * 
 */
export type Producer = $Result.DefaultSelection<Prisma.$ProducerPayload>
/**
 * Model PlantationCrops
 * 
 */
export type PlantationCrops = $Result.DefaultSelection<Prisma.$PlantationCropsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.producer`: Exposes CRUD operations for the **Producer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Producers
    * const producers = await prisma.producer.findMany()
    * ```
    */
  get producer(): Prisma.ProducerDelegate<ExtArgs>;

  /**
   * `prisma.plantationCrops`: Exposes CRUD operations for the **PlantationCrops** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantationCrops
    * const plantationCrops = await prisma.plantationCrops.findMany()
    * ```
    */
  get plantationCrops(): Prisma.PlantationCropsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Producer: 'Producer',
    PlantationCrops: 'PlantationCrops'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'producer' | 'plantationCrops'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Producer: {
        payload: Prisma.$ProducerPayload<ExtArgs>
        fields: Prisma.ProducerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProducerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProducerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          findFirst: {
            args: Prisma.ProducerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProducerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          findMany: {
            args: Prisma.ProducerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>[]
          }
          create: {
            args: Prisma.ProducerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          createMany: {
            args: Prisma.ProducerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProducerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          update: {
            args: Prisma.ProducerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          deleteMany: {
            args: Prisma.ProducerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProducerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProducerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          aggregate: {
            args: Prisma.ProducerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducer>
          }
          groupBy: {
            args: Prisma.ProducerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProducerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProducerCountArgs<ExtArgs>,
            result: $Utils.Optional<ProducerCountAggregateOutputType> | number
          }
        }
      }
      PlantationCrops: {
        payload: Prisma.$PlantationCropsPayload<ExtArgs>
        fields: Prisma.PlantationCropsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantationCropsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantationCropsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload>
          }
          findFirst: {
            args: Prisma.PlantationCropsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantationCropsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload>
          }
          findMany: {
            args: Prisma.PlantationCropsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload>[]
          }
          create: {
            args: Prisma.PlantationCropsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload>
          }
          createMany: {
            args: Prisma.PlantationCropsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlantationCropsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload>
          }
          update: {
            args: Prisma.PlantationCropsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload>
          }
          deleteMany: {
            args: Prisma.PlantationCropsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlantationCropsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlantationCropsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantationCropsPayload>
          }
          aggregate: {
            args: Prisma.PlantationCropsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlantationCrops>
          }
          groupBy: {
            args: Prisma.PlantationCropsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlantationCropsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantationCropsCountArgs<ExtArgs>,
            result: $Utils.Optional<PlantationCropsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    producer: number
    plantation_crops: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producer?: boolean | UserCountOutputTypeCountProducerArgs
    plantation_crops?: boolean | UserCountOutputTypeCountPlantation_cropsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProducerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProducerWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlantation_cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantationCropsWhereInput
  }



  /**
   * Count Type ProducerCountOutputType
   */

  export type ProducerCountOutputType = {
    plantation_crops: number
  }

  export type ProducerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantation_crops?: boolean | ProducerCountOutputTypeCountPlantation_cropsArgs
  }

  // Custom InputTypes

  /**
   * ProducerCountOutputType without action
   */
  export type ProducerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProducerCountOutputType
     */
    select?: ProducerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProducerCountOutputType without action
   */
  export type ProducerCountOutputTypeCountPlantation_cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantationCropsWhereInput
  }



  /**
   * Count Type PlantationCropsCountOutputType
   */

  export type PlantationCropsCountOutputType = {
    producer: number
  }

  export type PlantationCropsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producer?: boolean | PlantationCropsCountOutputTypeCountProducerArgs
  }

  // Custom InputTypes

  /**
   * PlantationCropsCountOutputType without action
   */
  export type PlantationCropsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCropsCountOutputType
     */
    select?: PlantationCropsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlantationCropsCountOutputType without action
   */
  export type PlantationCropsCountOutputTypeCountProducerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProducerWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    producer?: boolean | User$producerArgs<ExtArgs>
    plantation_crops?: boolean | User$plantation_cropsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producer?: boolean | User$producerArgs<ExtArgs>
    plantation_crops?: boolean | User$plantation_cropsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      producer: Prisma.$ProducerPayload<ExtArgs>[]
      plantation_crops: Prisma.$PlantationCropsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    producer<T extends User$producerArgs<ExtArgs> = {}>(args?: Subset<T, User$producerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findMany'> | Null>;

    plantation_crops<T extends User$plantation_cropsArgs<ExtArgs> = {}>(args?: Subset<T, User$plantation_cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.producer
   */
  export type User$producerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    where?: ProducerWhereInput
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    cursor?: ProducerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }


  /**
   * User.plantation_crops
   */
  export type User$plantation_cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    where?: PlantationCropsWhereInput
    orderBy?: PlantationCropsOrderByWithRelationInput | PlantationCropsOrderByWithRelationInput[]
    cursor?: PlantationCropsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantationCropsScalarFieldEnum | PlantationCropsScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Producer
   */

  export type AggregateProducer = {
    _count: ProducerCountAggregateOutputType | null
    _avg: ProducerAvgAggregateOutputType | null
    _sum: ProducerSumAggregateOutputType | null
    _min: ProducerMinAggregateOutputType | null
    _max: ProducerMaxAggregateOutputType | null
  }

  export type ProducerAvgAggregateOutputType = {
    cpf: number | null
    cnpj: number | null
    total_hectares: number | null
    arable_hectares: number | null
    vegetation_arable: number | null
    city: number | null
  }

  export type ProducerSumAggregateOutputType = {
    cpf: number | null
    cnpj: number | null
    total_hectares: number | null
    arable_hectares: number | null
    vegetation_arable: number | null
    city: number | null
  }

  export type ProducerMinAggregateOutputType = {
    id: string | null
    cpf: number | null
    cnpj: number | null
    name: string | null
    farm_name: string | null
    total_hectares: number | null
    arable_hectares: number | null
    vegetation_arable: number | null
    uf: string | null
    city: number | null
    user_id: string | null
  }

  export type ProducerMaxAggregateOutputType = {
    id: string | null
    cpf: number | null
    cnpj: number | null
    name: string | null
    farm_name: string | null
    total_hectares: number | null
    arable_hectares: number | null
    vegetation_arable: number | null
    uf: string | null
    city: number | null
    user_id: string | null
  }

  export type ProducerCountAggregateOutputType = {
    id: number
    cpf: number
    cnpj: number
    name: number
    farm_name: number
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: number
    city: number
    user_id: number
    _all: number
  }


  export type ProducerAvgAggregateInputType = {
    cpf?: true
    cnpj?: true
    total_hectares?: true
    arable_hectares?: true
    vegetation_arable?: true
    city?: true
  }

  export type ProducerSumAggregateInputType = {
    cpf?: true
    cnpj?: true
    total_hectares?: true
    arable_hectares?: true
    vegetation_arable?: true
    city?: true
  }

  export type ProducerMinAggregateInputType = {
    id?: true
    cpf?: true
    cnpj?: true
    name?: true
    farm_name?: true
    total_hectares?: true
    arable_hectares?: true
    vegetation_arable?: true
    uf?: true
    city?: true
    user_id?: true
  }

  export type ProducerMaxAggregateInputType = {
    id?: true
    cpf?: true
    cnpj?: true
    name?: true
    farm_name?: true
    total_hectares?: true
    arable_hectares?: true
    vegetation_arable?: true
    uf?: true
    city?: true
    user_id?: true
  }

  export type ProducerCountAggregateInputType = {
    id?: true
    cpf?: true
    cnpj?: true
    name?: true
    farm_name?: true
    total_hectares?: true
    arable_hectares?: true
    vegetation_arable?: true
    uf?: true
    city?: true
    user_id?: true
    _all?: true
  }

  export type ProducerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producer to aggregate.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Producers
    **/
    _count?: true | ProducerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProducerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProducerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProducerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProducerMaxAggregateInputType
  }

  export type GetProducerAggregateType<T extends ProducerAggregateArgs> = {
        [P in keyof T & keyof AggregateProducer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducer[P]>
      : GetScalarType<T[P], AggregateProducer[P]>
  }




  export type ProducerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProducerWhereInput
    orderBy?: ProducerOrderByWithAggregationInput | ProducerOrderByWithAggregationInput[]
    by: ProducerScalarFieldEnum[] | ProducerScalarFieldEnum
    having?: ProducerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProducerCountAggregateInputType | true
    _avg?: ProducerAvgAggregateInputType
    _sum?: ProducerSumAggregateInputType
    _min?: ProducerMinAggregateInputType
    _max?: ProducerMaxAggregateInputType
  }

  export type ProducerGroupByOutputType = {
    id: string
    cpf: number | null
    cnpj: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
    user_id: string | null
    _count: ProducerCountAggregateOutputType | null
    _avg: ProducerAvgAggregateOutputType | null
    _sum: ProducerSumAggregateOutputType | null
    _min: ProducerMinAggregateOutputType | null
    _max: ProducerMaxAggregateOutputType | null
  }

  type GetProducerGroupByPayload<T extends ProducerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProducerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProducerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProducerGroupByOutputType[P]>
            : GetScalarType<T[P], ProducerGroupByOutputType[P]>
        }
      >
    >


  export type ProducerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    cnpj?: boolean
    name?: boolean
    farm_name?: boolean
    total_hectares?: boolean
    arable_hectares?: boolean
    vegetation_arable?: boolean
    uf?: boolean
    city?: boolean
    user_id?: boolean
    plantation_crops?: boolean | Producer$plantation_cropsArgs<ExtArgs>
    user?: boolean | Producer$userArgs<ExtArgs>
    _count?: boolean | ProducerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producer"]>

  export type ProducerSelectScalar = {
    id?: boolean
    cpf?: boolean
    cnpj?: boolean
    name?: boolean
    farm_name?: boolean
    total_hectares?: boolean
    arable_hectares?: boolean
    vegetation_arable?: boolean
    uf?: boolean
    city?: boolean
    user_id?: boolean
  }

  export type ProducerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantation_crops?: boolean | Producer$plantation_cropsArgs<ExtArgs>
    user?: boolean | Producer$userArgs<ExtArgs>
    _count?: boolean | ProducerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProducerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producer"
    objects: {
      plantation_crops: Prisma.$PlantationCropsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cpf: number | null
      cnpj: number | null
      name: string
      farm_name: string
      total_hectares: number
      arable_hectares: number
      vegetation_arable: number
      uf: string
      city: number
      user_id: string | null
    }, ExtArgs["result"]["producer"]>
    composites: {}
  }


  type ProducerGetPayload<S extends boolean | null | undefined | ProducerDefaultArgs> = $Result.GetResult<Prisma.$ProducerPayload, S>

  type ProducerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProducerFindManyArgs, 'select' | 'include'> & {
      select?: ProducerCountAggregateInputType | true
    }

  export interface ProducerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producer'], meta: { name: 'Producer' } }
    /**
     * Find zero or one Producer that matches the filter.
     * @param {ProducerFindUniqueArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProducerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerFindUniqueArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Producer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProducerFindUniqueOrThrowArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProducerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Producer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindFirstArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProducerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerFindFirstArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Producer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindFirstOrThrowArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProducerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Producers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Producers
     * const producers = await prisma.producer.findMany()
     * 
     * // Get first 10 Producers
     * const producers = await prisma.producer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const producerWithIdOnly = await prisma.producer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProducerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Producer.
     * @param {ProducerCreateArgs} args - Arguments to create a Producer.
     * @example
     * // Create one Producer
     * const Producer = await prisma.producer.create({
     *   data: {
     *     // ... data to create a Producer
     *   }
     * })
     * 
    **/
    create<T extends ProducerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerCreateArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Producers.
     *     @param {ProducerCreateManyArgs} args - Arguments to create many Producers.
     *     @example
     *     // Create many Producers
     *     const producer = await prisma.producer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProducerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producer.
     * @param {ProducerDeleteArgs} args - Arguments to delete one Producer.
     * @example
     * // Delete one Producer
     * const Producer = await prisma.producer.delete({
     *   where: {
     *     // ... filter to delete one Producer
     *   }
     * })
     * 
    **/
    delete<T extends ProducerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerDeleteArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Producer.
     * @param {ProducerUpdateArgs} args - Arguments to update one Producer.
     * @example
     * // Update one Producer
     * const producer = await prisma.producer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProducerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerUpdateArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Producers.
     * @param {ProducerDeleteManyArgs} args - Arguments to filter Producers to delete.
     * @example
     * // Delete a few Producers
     * const { count } = await prisma.producer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProducerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Producers
     * const producer = await prisma.producer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProducerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producer.
     * @param {ProducerUpsertArgs} args - Arguments to update or create a Producer.
     * @example
     * // Update or create a Producer
     * const producer = await prisma.producer.upsert({
     *   create: {
     *     // ... data to create a Producer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producer we want to update
     *   }
     * })
    **/
    upsert<T extends ProducerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerUpsertArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerCountArgs} args - Arguments to filter Producers to count.
     * @example
     * // Count the number of Producers
     * const count = await prisma.producer.count({
     *   where: {
     *     // ... the filter for the Producers we want to count
     *   }
     * })
    **/
    count<T extends ProducerCountArgs>(
      args?: Subset<T, ProducerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProducerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProducerAggregateArgs>(args: Subset<T, ProducerAggregateArgs>): Prisma.PrismaPromise<GetProducerAggregateType<T>>

    /**
     * Group by Producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerGroupByArgs} args - Group by arguments.
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
      T extends ProducerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProducerGroupByArgs['orderBy'] }
        : { orderBy?: ProducerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProducerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producer model
   */
  readonly fields: ProducerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProducerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    plantation_crops<T extends Producer$plantation_cropsArgs<ExtArgs> = {}>(args?: Subset<T, Producer$plantation_cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends Producer$userArgs<ExtArgs> = {}>(args?: Subset<T, Producer$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Producer model
   */ 
  interface ProducerFieldRefs {
    readonly id: FieldRef<"Producer", 'String'>
    readonly cpf: FieldRef<"Producer", 'Float'>
    readonly cnpj: FieldRef<"Producer", 'Float'>
    readonly name: FieldRef<"Producer", 'String'>
    readonly farm_name: FieldRef<"Producer", 'String'>
    readonly total_hectares: FieldRef<"Producer", 'Float'>
    readonly arable_hectares: FieldRef<"Producer", 'Float'>
    readonly vegetation_arable: FieldRef<"Producer", 'Float'>
    readonly uf: FieldRef<"Producer", 'String'>
    readonly city: FieldRef<"Producer", 'Int'>
    readonly user_id: FieldRef<"Producer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Producer findUnique
   */
  export type ProducerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where: ProducerWhereUniqueInput
  }


  /**
   * Producer findUniqueOrThrow
   */
  export type ProducerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where: ProducerWhereUniqueInput
  }


  /**
   * Producer findFirst
   */
  export type ProducerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producers.
     */
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }


  /**
   * Producer findFirstOrThrow
   */
  export type ProducerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producers.
     */
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }


  /**
   * Producer findMany
   */
  export type ProducerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producers to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }


  /**
   * Producer create
   */
  export type ProducerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The data needed to create a Producer.
     */
    data: XOR<ProducerCreateInput, ProducerUncheckedCreateInput>
  }


  /**
   * Producer createMany
   */
  export type ProducerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Producers.
     */
    data: ProducerCreateManyInput | ProducerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Producer update
   */
  export type ProducerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The data needed to update a Producer.
     */
    data: XOR<ProducerUpdateInput, ProducerUncheckedUpdateInput>
    /**
     * Choose, which Producer to update.
     */
    where: ProducerWhereUniqueInput
  }


  /**
   * Producer updateMany
   */
  export type ProducerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Producers.
     */
    data: XOR<ProducerUpdateManyMutationInput, ProducerUncheckedUpdateManyInput>
    /**
     * Filter which Producers to update
     */
    where?: ProducerWhereInput
  }


  /**
   * Producer upsert
   */
  export type ProducerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The filter to search for the Producer to update in case it exists.
     */
    where: ProducerWhereUniqueInput
    /**
     * In case the Producer found by the `where` argument doesn't exist, create a new Producer with this data.
     */
    create: XOR<ProducerCreateInput, ProducerUncheckedCreateInput>
    /**
     * In case the Producer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProducerUpdateInput, ProducerUncheckedUpdateInput>
  }


  /**
   * Producer delete
   */
  export type ProducerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter which Producer to delete.
     */
    where: ProducerWhereUniqueInput
  }


  /**
   * Producer deleteMany
   */
  export type ProducerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producers to delete
     */
    where?: ProducerWhereInput
  }


  /**
   * Producer.plantation_crops
   */
  export type Producer$plantation_cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    where?: PlantationCropsWhereInput
    orderBy?: PlantationCropsOrderByWithRelationInput | PlantationCropsOrderByWithRelationInput[]
    cursor?: PlantationCropsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantationCropsScalarFieldEnum | PlantationCropsScalarFieldEnum[]
  }


  /**
   * Producer.user
   */
  export type Producer$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Producer without action
   */
  export type ProducerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
  }



  /**
   * Model PlantationCrops
   */

  export type AggregatePlantationCrops = {
    _count: PlantationCropsCountAggregateOutputType | null
    _min: PlantationCropsMinAggregateOutputType | null
    _max: PlantationCropsMaxAggregateOutputType | null
  }

  export type PlantationCropsMinAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
  }

  export type PlantationCropsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
  }

  export type PlantationCropsCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    _all: number
  }


  export type PlantationCropsMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type PlantationCropsMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type PlantationCropsCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    _all?: true
  }

  export type PlantationCropsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantationCrops to aggregate.
     */
    where?: PlantationCropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantationCrops to fetch.
     */
    orderBy?: PlantationCropsOrderByWithRelationInput | PlantationCropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantationCropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantationCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantationCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantationCrops
    **/
    _count?: true | PlantationCropsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantationCropsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantationCropsMaxAggregateInputType
  }

  export type GetPlantationCropsAggregateType<T extends PlantationCropsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantationCrops]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantationCrops[P]>
      : GetScalarType<T[P], AggregatePlantationCrops[P]>
  }




  export type PlantationCropsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantationCropsWhereInput
    orderBy?: PlantationCropsOrderByWithAggregationInput | PlantationCropsOrderByWithAggregationInput[]
    by: PlantationCropsScalarFieldEnum[] | PlantationCropsScalarFieldEnum
    having?: PlantationCropsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantationCropsCountAggregateInputType | true
    _min?: PlantationCropsMinAggregateInputType
    _max?: PlantationCropsMaxAggregateInputType
  }

  export type PlantationCropsGroupByOutputType = {
    id: string
    name: string
    user_id: string | null
    _count: PlantationCropsCountAggregateOutputType | null
    _min: PlantationCropsMinAggregateOutputType | null
    _max: PlantationCropsMaxAggregateOutputType | null
  }

  type GetPlantationCropsGroupByPayload<T extends PlantationCropsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantationCropsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantationCropsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantationCropsGroupByOutputType[P]>
            : GetScalarType<T[P], PlantationCropsGroupByOutputType[P]>
        }
      >
    >


  export type PlantationCropsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    producer?: boolean | PlantationCrops$producerArgs<ExtArgs>
    User?: boolean | PlantationCrops$UserArgs<ExtArgs>
    _count?: boolean | PlantationCropsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantationCrops"]>

  export type PlantationCropsSelectScalar = {
    id?: boolean
    name?: boolean
    user_id?: boolean
  }

  export type PlantationCropsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producer?: boolean | PlantationCrops$producerArgs<ExtArgs>
    User?: boolean | PlantationCrops$UserArgs<ExtArgs>
    _count?: boolean | PlantationCropsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlantationCropsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantationCrops"
    objects: {
      producer: Prisma.$ProducerPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      user_id: string | null
    }, ExtArgs["result"]["plantationCrops"]>
    composites: {}
  }


  type PlantationCropsGetPayload<S extends boolean | null | undefined | PlantationCropsDefaultArgs> = $Result.GetResult<Prisma.$PlantationCropsPayload, S>

  type PlantationCropsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlantationCropsFindManyArgs, 'select' | 'include'> & {
      select?: PlantationCropsCountAggregateInputType | true
    }

  export interface PlantationCropsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantationCrops'], meta: { name: 'PlantationCrops' } }
    /**
     * Find zero or one PlantationCrops that matches the filter.
     * @param {PlantationCropsFindUniqueArgs} args - Arguments to find a PlantationCrops
     * @example
     * // Get one PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlantationCropsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlantationCropsFindUniqueArgs<ExtArgs>>
    ): Prisma__PlantationCropsClient<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PlantationCrops that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlantationCropsFindUniqueOrThrowArgs} args - Arguments to find a PlantationCrops
     * @example
     * // Get one PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlantationCropsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantationCropsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlantationCropsClient<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PlantationCrops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantationCropsFindFirstArgs} args - Arguments to find a PlantationCrops
     * @example
     * // Get one PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlantationCropsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantationCropsFindFirstArgs<ExtArgs>>
    ): Prisma__PlantationCropsClient<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PlantationCrops that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantationCropsFindFirstOrThrowArgs} args - Arguments to find a PlantationCrops
     * @example
     * // Get one PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlantationCropsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantationCropsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlantationCropsClient<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PlantationCrops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantationCropsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.findMany()
     * 
     * // Get first 10 PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantationCropsWithIdOnly = await prisma.plantationCrops.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlantationCropsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantationCropsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PlantationCrops.
     * @param {PlantationCropsCreateArgs} args - Arguments to create a PlantationCrops.
     * @example
     * // Create one PlantationCrops
     * const PlantationCrops = await prisma.plantationCrops.create({
     *   data: {
     *     // ... data to create a PlantationCrops
     *   }
     * })
     * 
    **/
    create<T extends PlantationCropsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlantationCropsCreateArgs<ExtArgs>>
    ): Prisma__PlantationCropsClient<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PlantationCrops.
     *     @param {PlantationCropsCreateManyArgs} args - Arguments to create many PlantationCrops.
     *     @example
     *     // Create many PlantationCrops
     *     const plantationCrops = await prisma.plantationCrops.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlantationCropsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantationCropsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlantationCrops.
     * @param {PlantationCropsDeleteArgs} args - Arguments to delete one PlantationCrops.
     * @example
     * // Delete one PlantationCrops
     * const PlantationCrops = await prisma.plantationCrops.delete({
     *   where: {
     *     // ... filter to delete one PlantationCrops
     *   }
     * })
     * 
    **/
    delete<T extends PlantationCropsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlantationCropsDeleteArgs<ExtArgs>>
    ): Prisma__PlantationCropsClient<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PlantationCrops.
     * @param {PlantationCropsUpdateArgs} args - Arguments to update one PlantationCrops.
     * @example
     * // Update one PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlantationCropsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlantationCropsUpdateArgs<ExtArgs>>
    ): Prisma__PlantationCropsClient<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PlantationCrops.
     * @param {PlantationCropsDeleteManyArgs} args - Arguments to filter PlantationCrops to delete.
     * @example
     * // Delete a few PlantationCrops
     * const { count } = await prisma.plantationCrops.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlantationCropsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlantationCropsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantationCrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantationCropsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlantationCropsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlantationCropsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlantationCrops.
     * @param {PlantationCropsUpsertArgs} args - Arguments to update or create a PlantationCrops.
     * @example
     * // Update or create a PlantationCrops
     * const plantationCrops = await prisma.plantationCrops.upsert({
     *   create: {
     *     // ... data to create a PlantationCrops
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantationCrops we want to update
     *   }
     * })
    **/
    upsert<T extends PlantationCropsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlantationCropsUpsertArgs<ExtArgs>>
    ): Prisma__PlantationCropsClient<$Result.GetResult<Prisma.$PlantationCropsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PlantationCrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantationCropsCountArgs} args - Arguments to filter PlantationCrops to count.
     * @example
     * // Count the number of PlantationCrops
     * const count = await prisma.plantationCrops.count({
     *   where: {
     *     // ... the filter for the PlantationCrops we want to count
     *   }
     * })
    **/
    count<T extends PlantationCropsCountArgs>(
      args?: Subset<T, PlantationCropsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantationCropsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantationCrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantationCropsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantationCropsAggregateArgs>(args: Subset<T, PlantationCropsAggregateArgs>): Prisma.PrismaPromise<GetPlantationCropsAggregateType<T>>

    /**
     * Group by PlantationCrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantationCropsGroupByArgs} args - Group by arguments.
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
      T extends PlantationCropsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantationCropsGroupByArgs['orderBy'] }
        : { orderBy?: PlantationCropsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlantationCropsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantationCropsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantationCrops model
   */
  readonly fields: PlantationCropsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantationCrops.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantationCropsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    producer<T extends PlantationCrops$producerArgs<ExtArgs> = {}>(args?: Subset<T, PlantationCrops$producerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends PlantationCrops$UserArgs<ExtArgs> = {}>(args?: Subset<T, PlantationCrops$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PlantationCrops model
   */ 
  interface PlantationCropsFieldRefs {
    readonly id: FieldRef<"PlantationCrops", 'String'>
    readonly name: FieldRef<"PlantationCrops", 'String'>
    readonly user_id: FieldRef<"PlantationCrops", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PlantationCrops findUnique
   */
  export type PlantationCropsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * Filter, which PlantationCrops to fetch.
     */
    where: PlantationCropsWhereUniqueInput
  }


  /**
   * PlantationCrops findUniqueOrThrow
   */
  export type PlantationCropsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * Filter, which PlantationCrops to fetch.
     */
    where: PlantationCropsWhereUniqueInput
  }


  /**
   * PlantationCrops findFirst
   */
  export type PlantationCropsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * Filter, which PlantationCrops to fetch.
     */
    where?: PlantationCropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantationCrops to fetch.
     */
    orderBy?: PlantationCropsOrderByWithRelationInput | PlantationCropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantationCrops.
     */
    cursor?: PlantationCropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantationCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantationCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantationCrops.
     */
    distinct?: PlantationCropsScalarFieldEnum | PlantationCropsScalarFieldEnum[]
  }


  /**
   * PlantationCrops findFirstOrThrow
   */
  export type PlantationCropsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * Filter, which PlantationCrops to fetch.
     */
    where?: PlantationCropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantationCrops to fetch.
     */
    orderBy?: PlantationCropsOrderByWithRelationInput | PlantationCropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantationCrops.
     */
    cursor?: PlantationCropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantationCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantationCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantationCrops.
     */
    distinct?: PlantationCropsScalarFieldEnum | PlantationCropsScalarFieldEnum[]
  }


  /**
   * PlantationCrops findMany
   */
  export type PlantationCropsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * Filter, which PlantationCrops to fetch.
     */
    where?: PlantationCropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantationCrops to fetch.
     */
    orderBy?: PlantationCropsOrderByWithRelationInput | PlantationCropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantationCrops.
     */
    cursor?: PlantationCropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantationCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantationCrops.
     */
    skip?: number
    distinct?: PlantationCropsScalarFieldEnum | PlantationCropsScalarFieldEnum[]
  }


  /**
   * PlantationCrops create
   */
  export type PlantationCropsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantationCrops.
     */
    data: XOR<PlantationCropsCreateInput, PlantationCropsUncheckedCreateInput>
  }


  /**
   * PlantationCrops createMany
   */
  export type PlantationCropsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantationCrops.
     */
    data: PlantationCropsCreateManyInput | PlantationCropsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PlantationCrops update
   */
  export type PlantationCropsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantationCrops.
     */
    data: XOR<PlantationCropsUpdateInput, PlantationCropsUncheckedUpdateInput>
    /**
     * Choose, which PlantationCrops to update.
     */
    where: PlantationCropsWhereUniqueInput
  }


  /**
   * PlantationCrops updateMany
   */
  export type PlantationCropsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantationCrops.
     */
    data: XOR<PlantationCropsUpdateManyMutationInput, PlantationCropsUncheckedUpdateManyInput>
    /**
     * Filter which PlantationCrops to update
     */
    where?: PlantationCropsWhereInput
  }


  /**
   * PlantationCrops upsert
   */
  export type PlantationCropsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantationCrops to update in case it exists.
     */
    where: PlantationCropsWhereUniqueInput
    /**
     * In case the PlantationCrops found by the `where` argument doesn't exist, create a new PlantationCrops with this data.
     */
    create: XOR<PlantationCropsCreateInput, PlantationCropsUncheckedCreateInput>
    /**
     * In case the PlantationCrops was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantationCropsUpdateInput, PlantationCropsUncheckedUpdateInput>
  }


  /**
   * PlantationCrops delete
   */
  export type PlantationCropsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
    /**
     * Filter which PlantationCrops to delete.
     */
    where: PlantationCropsWhereUniqueInput
  }


  /**
   * PlantationCrops deleteMany
   */
  export type PlantationCropsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantationCrops to delete
     */
    where?: PlantationCropsWhereInput
  }


  /**
   * PlantationCrops.producer
   */
  export type PlantationCrops$producerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    where?: ProducerWhereInput
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    cursor?: ProducerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }


  /**
   * PlantationCrops.User
   */
  export type PlantationCrops$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * PlantationCrops without action
   */
  export type PlantationCropsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantationCrops
     */
    select?: PlantationCropsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlantationCropsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProducerScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    cnpj: 'cnpj',
    name: 'name',
    farm_name: 'farm_name',
    total_hectares: 'total_hectares',
    arable_hectares: 'arable_hectares',
    vegetation_arable: 'vegetation_arable',
    uf: 'uf',
    city: 'city',
    user_id: 'user_id'
  };

  export type ProducerScalarFieldEnum = (typeof ProducerScalarFieldEnum)[keyof typeof ProducerScalarFieldEnum]


  export const PlantationCropsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id'
  };

  export type PlantationCropsScalarFieldEnum = (typeof PlantationCropsScalarFieldEnum)[keyof typeof PlantationCropsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    producer?: ProducerListRelationFilter
    plantation_crops?: PlantationCropsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    producer?: ProducerOrderByRelationAggregateInput
    plantation_crops?: PlantationCropsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    producer?: ProducerListRelationFilter
    plantation_crops?: PlantationCropsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProducerWhereInput = {
    AND?: ProducerWhereInput | ProducerWhereInput[]
    OR?: ProducerWhereInput[]
    NOT?: ProducerWhereInput | ProducerWhereInput[]
    id?: StringFilter<"Producer"> | string
    cpf?: FloatNullableFilter<"Producer"> | number | null
    cnpj?: FloatNullableFilter<"Producer"> | number | null
    name?: StringFilter<"Producer"> | string
    farm_name?: StringFilter<"Producer"> | string
    total_hectares?: FloatFilter<"Producer"> | number
    arable_hectares?: FloatFilter<"Producer"> | number
    vegetation_arable?: FloatFilter<"Producer"> | number
    uf?: StringFilter<"Producer"> | string
    city?: IntFilter<"Producer"> | number
    user_id?: StringNullableFilter<"Producer"> | string | null
    plantation_crops?: PlantationCropsListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ProducerOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    name?: SortOrder
    farm_name?: SortOrder
    total_hectares?: SortOrder
    arable_hectares?: SortOrder
    vegetation_arable?: SortOrder
    uf?: SortOrder
    city?: SortOrder
    user_id?: SortOrderInput | SortOrder
    plantation_crops?: PlantationCropsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProducerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProducerWhereInput | ProducerWhereInput[]
    OR?: ProducerWhereInput[]
    NOT?: ProducerWhereInput | ProducerWhereInput[]
    cpf?: FloatNullableFilter<"Producer"> | number | null
    cnpj?: FloatNullableFilter<"Producer"> | number | null
    name?: StringFilter<"Producer"> | string
    farm_name?: StringFilter<"Producer"> | string
    total_hectares?: FloatFilter<"Producer"> | number
    arable_hectares?: FloatFilter<"Producer"> | number
    vegetation_arable?: FloatFilter<"Producer"> | number
    uf?: StringFilter<"Producer"> | string
    city?: IntFilter<"Producer"> | number
    user_id?: StringNullableFilter<"Producer"> | string | null
    plantation_crops?: PlantationCropsListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProducerOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    name?: SortOrder
    farm_name?: SortOrder
    total_hectares?: SortOrder
    arable_hectares?: SortOrder
    vegetation_arable?: SortOrder
    uf?: SortOrder
    city?: SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: ProducerCountOrderByAggregateInput
    _avg?: ProducerAvgOrderByAggregateInput
    _max?: ProducerMaxOrderByAggregateInput
    _min?: ProducerMinOrderByAggregateInput
    _sum?: ProducerSumOrderByAggregateInput
  }

  export type ProducerScalarWhereWithAggregatesInput = {
    AND?: ProducerScalarWhereWithAggregatesInput | ProducerScalarWhereWithAggregatesInput[]
    OR?: ProducerScalarWhereWithAggregatesInput[]
    NOT?: ProducerScalarWhereWithAggregatesInput | ProducerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Producer"> | string
    cpf?: FloatNullableWithAggregatesFilter<"Producer"> | number | null
    cnpj?: FloatNullableWithAggregatesFilter<"Producer"> | number | null
    name?: StringWithAggregatesFilter<"Producer"> | string
    farm_name?: StringWithAggregatesFilter<"Producer"> | string
    total_hectares?: FloatWithAggregatesFilter<"Producer"> | number
    arable_hectares?: FloatWithAggregatesFilter<"Producer"> | number
    vegetation_arable?: FloatWithAggregatesFilter<"Producer"> | number
    uf?: StringWithAggregatesFilter<"Producer"> | string
    city?: IntWithAggregatesFilter<"Producer"> | number
    user_id?: StringNullableWithAggregatesFilter<"Producer"> | string | null
  }

  export type PlantationCropsWhereInput = {
    AND?: PlantationCropsWhereInput | PlantationCropsWhereInput[]
    OR?: PlantationCropsWhereInput[]
    NOT?: PlantationCropsWhereInput | PlantationCropsWhereInput[]
    id?: StringFilter<"PlantationCrops"> | string
    name?: StringFilter<"PlantationCrops"> | string
    user_id?: StringNullableFilter<"PlantationCrops"> | string | null
    producer?: ProducerListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type PlantationCropsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrderInput | SortOrder
    producer?: ProducerOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type PlantationCropsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlantationCropsWhereInput | PlantationCropsWhereInput[]
    OR?: PlantationCropsWhereInput[]
    NOT?: PlantationCropsWhereInput | PlantationCropsWhereInput[]
    name?: StringFilter<"PlantationCrops"> | string
    user_id?: StringNullableFilter<"PlantationCrops"> | string | null
    producer?: ProducerListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type PlantationCropsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: PlantationCropsCountOrderByAggregateInput
    _max?: PlantationCropsMaxOrderByAggregateInput
    _min?: PlantationCropsMinOrderByAggregateInput
  }

  export type PlantationCropsScalarWhereWithAggregatesInput = {
    AND?: PlantationCropsScalarWhereWithAggregatesInput | PlantationCropsScalarWhereWithAggregatesInput[]
    OR?: PlantationCropsScalarWhereWithAggregatesInput[]
    NOT?: PlantationCropsScalarWhereWithAggregatesInput | PlantationCropsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlantationCrops"> | string
    name?: StringWithAggregatesFilter<"PlantationCrops"> | string
    user_id?: StringNullableWithAggregatesFilter<"PlantationCrops"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    producer?: ProducerCreateNestedManyWithoutUserInput
    plantation_crops?: PlantationCropsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    producer?: ProducerUncheckedCreateNestedManyWithoutUserInput
    plantation_crops?: PlantationCropsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    producer?: ProducerUpdateManyWithoutUserNestedInput
    plantation_crops?: PlantationCropsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    producer?: ProducerUncheckedUpdateManyWithoutUserNestedInput
    plantation_crops?: PlantationCropsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProducerCreateInput = {
    id?: string
    cpf?: number | null
    cnpj?: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
    plantation_crops?: PlantationCropsCreateNestedManyWithoutProducerInput
    user?: UserCreateNestedOneWithoutProducerInput
  }

  export type ProducerUncheckedCreateInput = {
    id?: string
    cpf?: number | null
    cnpj?: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
    user_id?: string | null
    plantation_crops?: PlantationCropsUncheckedCreateNestedManyWithoutProducerInput
  }

  export type ProducerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
    plantation_crops?: PlantationCropsUpdateManyWithoutProducerNestedInput
    user?: UserUpdateOneWithoutProducerNestedInput
  }

  export type ProducerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    plantation_crops?: PlantationCropsUncheckedUpdateManyWithoutProducerNestedInput
  }

  export type ProducerCreateManyInput = {
    id?: string
    cpf?: number | null
    cnpj?: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
    user_id?: string | null
  }

  export type ProducerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
  }

  export type ProducerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantationCropsCreateInput = {
    id?: string
    name: string
    producer?: ProducerCreateNestedManyWithoutPlantation_cropsInput
    User?: UserCreateNestedOneWithoutPlantation_cropsInput
  }

  export type PlantationCropsUncheckedCreateInput = {
    id?: string
    name: string
    user_id?: string | null
    producer?: ProducerUncheckedCreateNestedManyWithoutPlantation_cropsInput
  }

  export type PlantationCropsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    producer?: ProducerUpdateManyWithoutPlantation_cropsNestedInput
    User?: UserUpdateOneWithoutPlantation_cropsNestedInput
  }

  export type PlantationCropsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    producer?: ProducerUncheckedUpdateManyWithoutPlantation_cropsNestedInput
  }

  export type PlantationCropsCreateManyInput = {
    id?: string
    name: string
    user_id?: string | null
  }

  export type PlantationCropsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlantationCropsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProducerListRelationFilter = {
    every?: ProducerWhereInput
    some?: ProducerWhereInput
    none?: ProducerWhereInput
  }

  export type PlantationCropsListRelationFilter = {
    every?: PlantationCropsWhereInput
    some?: PlantationCropsWhereInput
    none?: PlantationCropsWhereInput
  }

  export type ProducerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantationCropsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProducerCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    name?: SortOrder
    farm_name?: SortOrder
    total_hectares?: SortOrder
    arable_hectares?: SortOrder
    vegetation_arable?: SortOrder
    uf?: SortOrder
    city?: SortOrder
    user_id?: SortOrder
  }

  export type ProducerAvgOrderByAggregateInput = {
    cpf?: SortOrder
    cnpj?: SortOrder
    total_hectares?: SortOrder
    arable_hectares?: SortOrder
    vegetation_arable?: SortOrder
    city?: SortOrder
  }

  export type ProducerMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    name?: SortOrder
    farm_name?: SortOrder
    total_hectares?: SortOrder
    arable_hectares?: SortOrder
    vegetation_arable?: SortOrder
    uf?: SortOrder
    city?: SortOrder
    user_id?: SortOrder
  }

  export type ProducerMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    name?: SortOrder
    farm_name?: SortOrder
    total_hectares?: SortOrder
    arable_hectares?: SortOrder
    vegetation_arable?: SortOrder
    uf?: SortOrder
    city?: SortOrder
    user_id?: SortOrder
  }

  export type ProducerSumOrderByAggregateInput = {
    cpf?: SortOrder
    cnpj?: SortOrder
    total_hectares?: SortOrder
    arable_hectares?: SortOrder
    vegetation_arable?: SortOrder
    city?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PlantationCropsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type PlantationCropsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type PlantationCropsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type ProducerCreateNestedManyWithoutUserInput = {
    create?: XOR<ProducerCreateWithoutUserInput, ProducerUncheckedCreateWithoutUserInput> | ProducerCreateWithoutUserInput[] | ProducerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProducerCreateOrConnectWithoutUserInput | ProducerCreateOrConnectWithoutUserInput[]
    createMany?: ProducerCreateManyUserInputEnvelope
    connect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
  }

  export type PlantationCropsCreateNestedManyWithoutUserInput = {
    create?: XOR<PlantationCropsCreateWithoutUserInput, PlantationCropsUncheckedCreateWithoutUserInput> | PlantationCropsCreateWithoutUserInput[] | PlantationCropsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlantationCropsCreateOrConnectWithoutUserInput | PlantationCropsCreateOrConnectWithoutUserInput[]
    createMany?: PlantationCropsCreateManyUserInputEnvelope
    connect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
  }

  export type ProducerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProducerCreateWithoutUserInput, ProducerUncheckedCreateWithoutUserInput> | ProducerCreateWithoutUserInput[] | ProducerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProducerCreateOrConnectWithoutUserInput | ProducerCreateOrConnectWithoutUserInput[]
    createMany?: ProducerCreateManyUserInputEnvelope
    connect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
  }

  export type PlantationCropsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlantationCropsCreateWithoutUserInput, PlantationCropsUncheckedCreateWithoutUserInput> | PlantationCropsCreateWithoutUserInput[] | PlantationCropsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlantationCropsCreateOrConnectWithoutUserInput | PlantationCropsCreateOrConnectWithoutUserInput[]
    createMany?: PlantationCropsCreateManyUserInputEnvelope
    connect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProducerUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProducerCreateWithoutUserInput, ProducerUncheckedCreateWithoutUserInput> | ProducerCreateWithoutUserInput[] | ProducerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProducerCreateOrConnectWithoutUserInput | ProducerCreateOrConnectWithoutUserInput[]
    upsert?: ProducerUpsertWithWhereUniqueWithoutUserInput | ProducerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProducerCreateManyUserInputEnvelope
    set?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    disconnect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    delete?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    connect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    update?: ProducerUpdateWithWhereUniqueWithoutUserInput | ProducerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProducerUpdateManyWithWhereWithoutUserInput | ProducerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProducerScalarWhereInput | ProducerScalarWhereInput[]
  }

  export type PlantationCropsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlantationCropsCreateWithoutUserInput, PlantationCropsUncheckedCreateWithoutUserInput> | PlantationCropsCreateWithoutUserInput[] | PlantationCropsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlantationCropsCreateOrConnectWithoutUserInput | PlantationCropsCreateOrConnectWithoutUserInput[]
    upsert?: PlantationCropsUpsertWithWhereUniqueWithoutUserInput | PlantationCropsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlantationCropsCreateManyUserInputEnvelope
    set?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    disconnect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    delete?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    connect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    update?: PlantationCropsUpdateWithWhereUniqueWithoutUserInput | PlantationCropsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlantationCropsUpdateManyWithWhereWithoutUserInput | PlantationCropsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlantationCropsScalarWhereInput | PlantationCropsScalarWhereInput[]
  }

  export type ProducerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProducerCreateWithoutUserInput, ProducerUncheckedCreateWithoutUserInput> | ProducerCreateWithoutUserInput[] | ProducerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProducerCreateOrConnectWithoutUserInput | ProducerCreateOrConnectWithoutUserInput[]
    upsert?: ProducerUpsertWithWhereUniqueWithoutUserInput | ProducerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProducerCreateManyUserInputEnvelope
    set?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    disconnect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    delete?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    connect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    update?: ProducerUpdateWithWhereUniqueWithoutUserInput | ProducerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProducerUpdateManyWithWhereWithoutUserInput | ProducerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProducerScalarWhereInput | ProducerScalarWhereInput[]
  }

  export type PlantationCropsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlantationCropsCreateWithoutUserInput, PlantationCropsUncheckedCreateWithoutUserInput> | PlantationCropsCreateWithoutUserInput[] | PlantationCropsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlantationCropsCreateOrConnectWithoutUserInput | PlantationCropsCreateOrConnectWithoutUserInput[]
    upsert?: PlantationCropsUpsertWithWhereUniqueWithoutUserInput | PlantationCropsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlantationCropsCreateManyUserInputEnvelope
    set?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    disconnect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    delete?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    connect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    update?: PlantationCropsUpdateWithWhereUniqueWithoutUserInput | PlantationCropsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlantationCropsUpdateManyWithWhereWithoutUserInput | PlantationCropsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlantationCropsScalarWhereInput | PlantationCropsScalarWhereInput[]
  }

  export type PlantationCropsCreateNestedManyWithoutProducerInput = {
    create?: XOR<PlantationCropsCreateWithoutProducerInput, PlantationCropsUncheckedCreateWithoutProducerInput> | PlantationCropsCreateWithoutProducerInput[] | PlantationCropsUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: PlantationCropsCreateOrConnectWithoutProducerInput | PlantationCropsCreateOrConnectWithoutProducerInput[]
    connect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProducerInput = {
    create?: XOR<UserCreateWithoutProducerInput, UserUncheckedCreateWithoutProducerInput>
    connectOrCreate?: UserCreateOrConnectWithoutProducerInput
    connect?: UserWhereUniqueInput
  }

  export type PlantationCropsUncheckedCreateNestedManyWithoutProducerInput = {
    create?: XOR<PlantationCropsCreateWithoutProducerInput, PlantationCropsUncheckedCreateWithoutProducerInput> | PlantationCropsCreateWithoutProducerInput[] | PlantationCropsUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: PlantationCropsCreateOrConnectWithoutProducerInput | PlantationCropsCreateOrConnectWithoutProducerInput[]
    connect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlantationCropsUpdateManyWithoutProducerNestedInput = {
    create?: XOR<PlantationCropsCreateWithoutProducerInput, PlantationCropsUncheckedCreateWithoutProducerInput> | PlantationCropsCreateWithoutProducerInput[] | PlantationCropsUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: PlantationCropsCreateOrConnectWithoutProducerInput | PlantationCropsCreateOrConnectWithoutProducerInput[]
    upsert?: PlantationCropsUpsertWithWhereUniqueWithoutProducerInput | PlantationCropsUpsertWithWhereUniqueWithoutProducerInput[]
    set?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    disconnect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    delete?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    connect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    update?: PlantationCropsUpdateWithWhereUniqueWithoutProducerInput | PlantationCropsUpdateWithWhereUniqueWithoutProducerInput[]
    updateMany?: PlantationCropsUpdateManyWithWhereWithoutProducerInput | PlantationCropsUpdateManyWithWhereWithoutProducerInput[]
    deleteMany?: PlantationCropsScalarWhereInput | PlantationCropsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutProducerNestedInput = {
    create?: XOR<UserCreateWithoutProducerInput, UserUncheckedCreateWithoutProducerInput>
    connectOrCreate?: UserCreateOrConnectWithoutProducerInput
    upsert?: UserUpsertWithoutProducerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProducerInput, UserUpdateWithoutProducerInput>, UserUncheckedUpdateWithoutProducerInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PlantationCropsUncheckedUpdateManyWithoutProducerNestedInput = {
    create?: XOR<PlantationCropsCreateWithoutProducerInput, PlantationCropsUncheckedCreateWithoutProducerInput> | PlantationCropsCreateWithoutProducerInput[] | PlantationCropsUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: PlantationCropsCreateOrConnectWithoutProducerInput | PlantationCropsCreateOrConnectWithoutProducerInput[]
    upsert?: PlantationCropsUpsertWithWhereUniqueWithoutProducerInput | PlantationCropsUpsertWithWhereUniqueWithoutProducerInput[]
    set?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    disconnect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    delete?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    connect?: PlantationCropsWhereUniqueInput | PlantationCropsWhereUniqueInput[]
    update?: PlantationCropsUpdateWithWhereUniqueWithoutProducerInput | PlantationCropsUpdateWithWhereUniqueWithoutProducerInput[]
    updateMany?: PlantationCropsUpdateManyWithWhereWithoutProducerInput | PlantationCropsUpdateManyWithWhereWithoutProducerInput[]
    deleteMany?: PlantationCropsScalarWhereInput | PlantationCropsScalarWhereInput[]
  }

  export type ProducerCreateNestedManyWithoutPlantation_cropsInput = {
    create?: XOR<ProducerCreateWithoutPlantation_cropsInput, ProducerUncheckedCreateWithoutPlantation_cropsInput> | ProducerCreateWithoutPlantation_cropsInput[] | ProducerUncheckedCreateWithoutPlantation_cropsInput[]
    connectOrCreate?: ProducerCreateOrConnectWithoutPlantation_cropsInput | ProducerCreateOrConnectWithoutPlantation_cropsInput[]
    connect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlantation_cropsInput = {
    create?: XOR<UserCreateWithoutPlantation_cropsInput, UserUncheckedCreateWithoutPlantation_cropsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlantation_cropsInput
    connect?: UserWhereUniqueInput
  }

  export type ProducerUncheckedCreateNestedManyWithoutPlantation_cropsInput = {
    create?: XOR<ProducerCreateWithoutPlantation_cropsInput, ProducerUncheckedCreateWithoutPlantation_cropsInput> | ProducerCreateWithoutPlantation_cropsInput[] | ProducerUncheckedCreateWithoutPlantation_cropsInput[]
    connectOrCreate?: ProducerCreateOrConnectWithoutPlantation_cropsInput | ProducerCreateOrConnectWithoutPlantation_cropsInput[]
    connect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
  }

  export type ProducerUpdateManyWithoutPlantation_cropsNestedInput = {
    create?: XOR<ProducerCreateWithoutPlantation_cropsInput, ProducerUncheckedCreateWithoutPlantation_cropsInput> | ProducerCreateWithoutPlantation_cropsInput[] | ProducerUncheckedCreateWithoutPlantation_cropsInput[]
    connectOrCreate?: ProducerCreateOrConnectWithoutPlantation_cropsInput | ProducerCreateOrConnectWithoutPlantation_cropsInput[]
    upsert?: ProducerUpsertWithWhereUniqueWithoutPlantation_cropsInput | ProducerUpsertWithWhereUniqueWithoutPlantation_cropsInput[]
    set?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    disconnect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    delete?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    connect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    update?: ProducerUpdateWithWhereUniqueWithoutPlantation_cropsInput | ProducerUpdateWithWhereUniqueWithoutPlantation_cropsInput[]
    updateMany?: ProducerUpdateManyWithWhereWithoutPlantation_cropsInput | ProducerUpdateManyWithWhereWithoutPlantation_cropsInput[]
    deleteMany?: ProducerScalarWhereInput | ProducerScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPlantation_cropsNestedInput = {
    create?: XOR<UserCreateWithoutPlantation_cropsInput, UserUncheckedCreateWithoutPlantation_cropsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlantation_cropsInput
    upsert?: UserUpsertWithoutPlantation_cropsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlantation_cropsInput, UserUpdateWithoutPlantation_cropsInput>, UserUncheckedUpdateWithoutPlantation_cropsInput>
  }

  export type ProducerUncheckedUpdateManyWithoutPlantation_cropsNestedInput = {
    create?: XOR<ProducerCreateWithoutPlantation_cropsInput, ProducerUncheckedCreateWithoutPlantation_cropsInput> | ProducerCreateWithoutPlantation_cropsInput[] | ProducerUncheckedCreateWithoutPlantation_cropsInput[]
    connectOrCreate?: ProducerCreateOrConnectWithoutPlantation_cropsInput | ProducerCreateOrConnectWithoutPlantation_cropsInput[]
    upsert?: ProducerUpsertWithWhereUniqueWithoutPlantation_cropsInput | ProducerUpsertWithWhereUniqueWithoutPlantation_cropsInput[]
    set?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    disconnect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    delete?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    connect?: ProducerWhereUniqueInput | ProducerWhereUniqueInput[]
    update?: ProducerUpdateWithWhereUniqueWithoutPlantation_cropsInput | ProducerUpdateWithWhereUniqueWithoutPlantation_cropsInput[]
    updateMany?: ProducerUpdateManyWithWhereWithoutPlantation_cropsInput | ProducerUpdateManyWithWhereWithoutPlantation_cropsInput[]
    deleteMany?: ProducerScalarWhereInput | ProducerScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProducerCreateWithoutUserInput = {
    id?: string
    cpf?: number | null
    cnpj?: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
    plantation_crops?: PlantationCropsCreateNestedManyWithoutProducerInput
  }

  export type ProducerUncheckedCreateWithoutUserInput = {
    id?: string
    cpf?: number | null
    cnpj?: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
    plantation_crops?: PlantationCropsUncheckedCreateNestedManyWithoutProducerInput
  }

  export type ProducerCreateOrConnectWithoutUserInput = {
    where: ProducerWhereUniqueInput
    create: XOR<ProducerCreateWithoutUserInput, ProducerUncheckedCreateWithoutUserInput>
  }

  export type ProducerCreateManyUserInputEnvelope = {
    data: ProducerCreateManyUserInput | ProducerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlantationCropsCreateWithoutUserInput = {
    id?: string
    name: string
    producer?: ProducerCreateNestedManyWithoutPlantation_cropsInput
  }

  export type PlantationCropsUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    producer?: ProducerUncheckedCreateNestedManyWithoutPlantation_cropsInput
  }

  export type PlantationCropsCreateOrConnectWithoutUserInput = {
    where: PlantationCropsWhereUniqueInput
    create: XOR<PlantationCropsCreateWithoutUserInput, PlantationCropsUncheckedCreateWithoutUserInput>
  }

  export type PlantationCropsCreateManyUserInputEnvelope = {
    data: PlantationCropsCreateManyUserInput | PlantationCropsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProducerUpsertWithWhereUniqueWithoutUserInput = {
    where: ProducerWhereUniqueInput
    update: XOR<ProducerUpdateWithoutUserInput, ProducerUncheckedUpdateWithoutUserInput>
    create: XOR<ProducerCreateWithoutUserInput, ProducerUncheckedCreateWithoutUserInput>
  }

  export type ProducerUpdateWithWhereUniqueWithoutUserInput = {
    where: ProducerWhereUniqueInput
    data: XOR<ProducerUpdateWithoutUserInput, ProducerUncheckedUpdateWithoutUserInput>
  }

  export type ProducerUpdateManyWithWhereWithoutUserInput = {
    where: ProducerScalarWhereInput
    data: XOR<ProducerUpdateManyMutationInput, ProducerUncheckedUpdateManyWithoutUserInput>
  }

  export type ProducerScalarWhereInput = {
    AND?: ProducerScalarWhereInput | ProducerScalarWhereInput[]
    OR?: ProducerScalarWhereInput[]
    NOT?: ProducerScalarWhereInput | ProducerScalarWhereInput[]
    id?: StringFilter<"Producer"> | string
    cpf?: FloatNullableFilter<"Producer"> | number | null
    cnpj?: FloatNullableFilter<"Producer"> | number | null
    name?: StringFilter<"Producer"> | string
    farm_name?: StringFilter<"Producer"> | string
    total_hectares?: FloatFilter<"Producer"> | number
    arable_hectares?: FloatFilter<"Producer"> | number
    vegetation_arable?: FloatFilter<"Producer"> | number
    uf?: StringFilter<"Producer"> | string
    city?: IntFilter<"Producer"> | number
    user_id?: StringNullableFilter<"Producer"> | string | null
  }

  export type PlantationCropsUpsertWithWhereUniqueWithoutUserInput = {
    where: PlantationCropsWhereUniqueInput
    update: XOR<PlantationCropsUpdateWithoutUserInput, PlantationCropsUncheckedUpdateWithoutUserInput>
    create: XOR<PlantationCropsCreateWithoutUserInput, PlantationCropsUncheckedCreateWithoutUserInput>
  }

  export type PlantationCropsUpdateWithWhereUniqueWithoutUserInput = {
    where: PlantationCropsWhereUniqueInput
    data: XOR<PlantationCropsUpdateWithoutUserInput, PlantationCropsUncheckedUpdateWithoutUserInput>
  }

  export type PlantationCropsUpdateManyWithWhereWithoutUserInput = {
    where: PlantationCropsScalarWhereInput
    data: XOR<PlantationCropsUpdateManyMutationInput, PlantationCropsUncheckedUpdateManyWithoutUserInput>
  }

  export type PlantationCropsScalarWhereInput = {
    AND?: PlantationCropsScalarWhereInput | PlantationCropsScalarWhereInput[]
    OR?: PlantationCropsScalarWhereInput[]
    NOT?: PlantationCropsScalarWhereInput | PlantationCropsScalarWhereInput[]
    id?: StringFilter<"PlantationCrops"> | string
    name?: StringFilter<"PlantationCrops"> | string
    user_id?: StringNullableFilter<"PlantationCrops"> | string | null
  }

  export type PlantationCropsCreateWithoutProducerInput = {
    id?: string
    name: string
    User?: UserCreateNestedOneWithoutPlantation_cropsInput
  }

  export type PlantationCropsUncheckedCreateWithoutProducerInput = {
    id?: string
    name: string
    user_id?: string | null
  }

  export type PlantationCropsCreateOrConnectWithoutProducerInput = {
    where: PlantationCropsWhereUniqueInput
    create: XOR<PlantationCropsCreateWithoutProducerInput, PlantationCropsUncheckedCreateWithoutProducerInput>
  }

  export type UserCreateWithoutProducerInput = {
    id?: string
    email: string
    password: string
    name: string
    plantation_crops?: PlantationCropsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProducerInput = {
    id?: string
    email: string
    password: string
    name: string
    plantation_crops?: PlantationCropsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProducerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProducerInput, UserUncheckedCreateWithoutProducerInput>
  }

  export type PlantationCropsUpsertWithWhereUniqueWithoutProducerInput = {
    where: PlantationCropsWhereUniqueInput
    update: XOR<PlantationCropsUpdateWithoutProducerInput, PlantationCropsUncheckedUpdateWithoutProducerInput>
    create: XOR<PlantationCropsCreateWithoutProducerInput, PlantationCropsUncheckedCreateWithoutProducerInput>
  }

  export type PlantationCropsUpdateWithWhereUniqueWithoutProducerInput = {
    where: PlantationCropsWhereUniqueInput
    data: XOR<PlantationCropsUpdateWithoutProducerInput, PlantationCropsUncheckedUpdateWithoutProducerInput>
  }

  export type PlantationCropsUpdateManyWithWhereWithoutProducerInput = {
    where: PlantationCropsScalarWhereInput
    data: XOR<PlantationCropsUpdateManyMutationInput, PlantationCropsUncheckedUpdateManyWithoutProducerInput>
  }

  export type UserUpsertWithoutProducerInput = {
    update: XOR<UserUpdateWithoutProducerInput, UserUncheckedUpdateWithoutProducerInput>
    create: XOR<UserCreateWithoutProducerInput, UserUncheckedCreateWithoutProducerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProducerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProducerInput, UserUncheckedUpdateWithoutProducerInput>
  }

  export type UserUpdateWithoutProducerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plantation_crops?: PlantationCropsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProducerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plantation_crops?: PlantationCropsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProducerCreateWithoutPlantation_cropsInput = {
    id?: string
    cpf?: number | null
    cnpj?: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
    user?: UserCreateNestedOneWithoutProducerInput
  }

  export type ProducerUncheckedCreateWithoutPlantation_cropsInput = {
    id?: string
    cpf?: number | null
    cnpj?: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
    user_id?: string | null
  }

  export type ProducerCreateOrConnectWithoutPlantation_cropsInput = {
    where: ProducerWhereUniqueInput
    create: XOR<ProducerCreateWithoutPlantation_cropsInput, ProducerUncheckedCreateWithoutPlantation_cropsInput>
  }

  export type UserCreateWithoutPlantation_cropsInput = {
    id?: string
    email: string
    password: string
    name: string
    producer?: ProducerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlantation_cropsInput = {
    id?: string
    email: string
    password: string
    name: string
    producer?: ProducerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlantation_cropsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlantation_cropsInput, UserUncheckedCreateWithoutPlantation_cropsInput>
  }

  export type ProducerUpsertWithWhereUniqueWithoutPlantation_cropsInput = {
    where: ProducerWhereUniqueInput
    update: XOR<ProducerUpdateWithoutPlantation_cropsInput, ProducerUncheckedUpdateWithoutPlantation_cropsInput>
    create: XOR<ProducerCreateWithoutPlantation_cropsInput, ProducerUncheckedCreateWithoutPlantation_cropsInput>
  }

  export type ProducerUpdateWithWhereUniqueWithoutPlantation_cropsInput = {
    where: ProducerWhereUniqueInput
    data: XOR<ProducerUpdateWithoutPlantation_cropsInput, ProducerUncheckedUpdateWithoutPlantation_cropsInput>
  }

  export type ProducerUpdateManyWithWhereWithoutPlantation_cropsInput = {
    where: ProducerScalarWhereInput
    data: XOR<ProducerUpdateManyMutationInput, ProducerUncheckedUpdateManyWithoutPlantation_cropsInput>
  }

  export type UserUpsertWithoutPlantation_cropsInput = {
    update: XOR<UserUpdateWithoutPlantation_cropsInput, UserUncheckedUpdateWithoutPlantation_cropsInput>
    create: XOR<UserCreateWithoutPlantation_cropsInput, UserUncheckedCreateWithoutPlantation_cropsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlantation_cropsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlantation_cropsInput, UserUncheckedUpdateWithoutPlantation_cropsInput>
  }

  export type UserUpdateWithoutPlantation_cropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    producer?: ProducerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlantation_cropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    producer?: ProducerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProducerCreateManyUserInput = {
    id?: string
    cpf?: number | null
    cnpj?: number | null
    name: string
    farm_name: string
    total_hectares: number
    arable_hectares: number
    vegetation_arable: number
    uf: string
    city: number
  }

  export type PlantationCropsCreateManyUserInput = {
    id?: string
    name: string
  }

  export type ProducerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
    plantation_crops?: PlantationCropsUpdateManyWithoutProducerNestedInput
  }

  export type ProducerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
    plantation_crops?: PlantationCropsUncheckedUpdateManyWithoutProducerNestedInput
  }

  export type ProducerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
  }

  export type PlantationCropsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    producer?: ProducerUpdateManyWithoutPlantation_cropsNestedInput
  }

  export type PlantationCropsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    producer?: ProducerUncheckedUpdateManyWithoutPlantation_cropsNestedInput
  }

  export type PlantationCropsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlantationCropsUpdateWithoutProducerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutPlantation_cropsNestedInput
  }

  export type PlantationCropsUncheckedUpdateWithoutProducerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantationCropsUncheckedUpdateManyWithoutProducerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProducerUpdateWithoutPlantation_cropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutProducerNestedInput
  }

  export type ProducerUncheckedUpdateWithoutPlantation_cropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProducerUncheckedUpdateManyWithoutPlantation_cropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: NullableFloatFieldUpdateOperationsInput | number | null
    cnpj?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    farm_name?: StringFieldUpdateOperationsInput | string
    total_hectares?: FloatFieldUpdateOperationsInput | number
    arable_hectares?: FloatFieldUpdateOperationsInput | number
    vegetation_arable?: FloatFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    city?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProducerCountOutputTypeDefaultArgs instead
     */
    export type ProducerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProducerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlantationCropsCountOutputTypeDefaultArgs instead
     */
    export type PlantationCropsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlantationCropsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProducerDefaultArgs instead
     */
    export type ProducerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProducerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlantationCropsDefaultArgs instead
     */
    export type PlantationCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlantationCropsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}