// 断言

// 1.尖括号语法
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;

// 2. as 语法
let anyValue: unknown = "this is a string";
let strLen: number = (someValue as string).length;

// 非空断言

// 1. 忽略null和undefined
function myFunc(str: string | null | undefined) {
  // const onlyString: string = str; // 报错
  const ignoreUndefinedAndNull: string = str!;
}

// 2. 调用函数时忽略undefined
type NumGen = () => number;
function myFunc1(numGen: NumGen | undefined) {
  // const num1 = numGen(); // Error
  const num2 = numGen!();
}

// 3. 确定赋值断言
let x!: number;

initialize();
console.log(2 * x); //
function initialize() {
  x = 10;
}
