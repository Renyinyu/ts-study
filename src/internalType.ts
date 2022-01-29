// Partial 将一个类型的所有key变为可选

/**
 * keyof T：先将类型的key转换为联合类型
 * in keyofT: 遍历联合类型
 * ?：将key转换为可选字段
 * T[P]：设置为字段为原来的类型
 */

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type PartialOptional<T, K extends keyof T> = {
  [P in K]?: T[P];
};

/**
 * @example
 *     type Eg1 = { key1?: string; key2?: number }
 */
type Eg1 = PartialOptional<
  {
    key1: string;
    key2: number;
    key3: "";
  },
  "key1" | "key2"
>;

// Readonly
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * @example
 * type Eg = {
 *   readonly key1: string;
 *   readonly key2: number;
 * }
 */
type Eg = MyReadonly<{
  key1: string;
  key2: number;
}>;

/**
 * Pick: 挑选一组新的属性成为新的类型
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
