// 对象的形状
interface Person {
  name: string;
  age: number;
}

let linker: Person = {
  name: "semlinker",
  age: 33,
};

// 可选 | 只读属性
interface Person2 {
  readonly name: string;
  age?: number;
}

// 任意属性
interface PersonAnyProps {
  name: string;
  age?: number;
  [propName: string]: any;
}

const p1: PersonAnyProps = { name: "sss" };
const p2: PersonAnyProps = { name: "sss", age: 4 };
const p3: PersonAnyProps = { name: "sss", sex: 1 };

// 接口与类型别名的区别
// 1. Objects/Functions

// 描述对象的形状或函数签名
// 接口
interface Point1 {
  x: number;
  y: number;
}

interface SetPoint1 {
  (x: number, y: number): void;
}

// 类型别名
type Point2 = {
  x: number;
  y: number;
};

type SetPoint2 = (x: number, y: number) => void;
