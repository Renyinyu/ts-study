// 参数类型和返回类型
function createUserId(name: string, id: number): string {
  return name + id;
}

/**
 * 函数类型
 * 对应位置的参数，参数名可以不一样，但类型必须一致
 */
let idGenerator: (chars: string, nunms: number) => string;

// function createId(name: string, id: number): string {}
idGenerator = createUserId;

/**
 * 可选参数及默认参数
 * 注意点：可选参数需要放在普通参数后面
 */
function createId(name: string = "linker", id: number, age?: number): string {
  return name + id;
}

/**
 * 剩余参数
 */
function push(ary: unknown[], ...items: unknown[]): void {
  items.forEach((item) => ary.push(item));
}

let a: number[] = [];
push(a, 1, 2, 3);

/**
 * 函数重载
 * 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力
 */

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;

type Combinable = string | number;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// class Calculator {
//   add(a: number, b: number): number;
//   add(a: string, b: string): string;
//   add(a: string, b: number): string;
//   add(a: number, b: string): string;

//   add(a: Combinable, b: Combinable) {
//     if (typeof a === "string" || typeof b === "string") {
//       return a.toString() + b.toString();
//     }
//     return a + b;
//   }
// }
