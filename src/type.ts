// 基础类型

// boolean类型
let isDone: boolean = false;

// number类型
let count: number = 1;

// string类型
let firstName: string = "collins";

// symbol类型
const sym = Symbol();
let obj = {
  [sym]: "symbol"
};

console.log(obj[sym]);

// array类型
let list: number[] = [1, 2, 3];

let stringList: Array<string> = ["2", "sss"];

// enum类型（ts支持数字和基于字符串的枚举）

// 1.数字枚举
enum Direction {
  NORTH, // 0
  SOUTH, // 1
  EAST, // 2
  WEST // 3
}

let direction: Direction = Direction.EAST;

console.log(Direction.EAST); // 2
console.log(Direction[2]); // EAST

// 字符串枚举
enum DirectionStr {
  NORTH = "north",
  SOUTH = "south",
  EAST = "east",
  WEST = "west"
}

// 异构枚举（成员值是数字和字符串得混合）
enum mixEnum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F
}

// unknown 类型（所有类型也都可以赋值给unknown）
let value: unknown;

value = true;
value = 42;
value = "hello world";
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
value = new TypeError();
value = Symbol("type");

// unknown 类型只能被赋值给any类型和unknown类型本身；
let value1: unknown = value;
let value2: any = value;
// let value3: string = value

// tuple类型
let tupleType: [string, boolean];
tupleType = ["linker", true];

console.log(tupleType[0]); // linker
console.log(tupleType[1]); // true

// void类型（通常用在函数返回值）
function warnUser(): void {}

// null和undefined类型(通常用在联合类型)
let u: undefined = undefined;
let n: null = null;

// object, Object和｛｝类型
// 1. object类型（表示非原始类型）
