/**
 * 泛型工具类
 */

// typeof 获取一个变量声明或对象的类型
interface Person3 {
  name: string;
  age: number;
}

const sem: Person3 = { name: "John", age: 20 };
type Sem = typeof sem; // Person3
// console.log(typeof sem);

const n1: number = 2;
type s = typeof n1;

const toArray: (num: number) => number[] = (num: number) => {
  return [num];
};

type Func = typeof toArray;

// keyof 获取某种类型的所有键，其返回类型是联合类型
type K1 = keyof Sem; // name | age
type K2 = keyof Person3[]; // length | toString | pop | push |....
type K3 = keyof { [x: string]: Person3 }; // TODO: string | number

/**
 * 为了同时支持两种索引类型，就得要求数字索引的返回值必须是字符串索引返回值的子类。
 * 其中的原因就是当使用数值索引时，JavaScript 在执行索引操作时，会先把数值索引先转换为字符串索引。
 * 所以 keyof { [x: string]: Person } 的结果会返回 string | number。
 */

// ts支持两种索引签名，数字索引和字符串索引
interface StringArray {
  // 字符串索引：keyof StringArray => string | number
  [index: string]: string;
}

interface StringArray1 {
  // 数字索引：keyof StringArray1 => number
  [index: number]: string;
}

// in：用来遍历枚举类型
type keys = "a" | "b" | "c";

type obj = {
  [p in keys]: any;
}; // -> {a: any, b: any, c: any}

// extends: 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束
interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Partial：Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "Learn TS",
  description: "Learn TypeScript",
};

const todo2 = updateTodo(todo1, {
  description: "Learn TypeScript Enum",
});
