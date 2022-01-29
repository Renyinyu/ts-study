/**
 * 泛型
 * 常见泛型类型变量
 * T
 * U
 * K:表示对象中的键类型
 * V：表示对象中的值类型
 * E：表示元素类型
 */

function identity<T>(value: T): T {
  return value;
}

identity<number>(2);

// 多个泛型变量
function identity2<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

console.log(identity2<number, string>(68, "linker"));

// 泛型接口
interface GenericIdentifyFn<T> {
  (arg: T): T;
}

// 泛型类
class GenericNumber<T = any> {
  zeroValue: T;

  constructor(name: T) {
    this.zeroValue = name;
  }

  add(x: T, y: T) {
    if (typeof x == "number" && typeof y == "number") {
      return x + y;
    }
  }
}

let myGenericNumber = new GenericNumber<number>(3);
myGenericNumber.zeroValue = 0;
