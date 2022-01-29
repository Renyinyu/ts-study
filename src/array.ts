// 数组结构
let num1: number = 0;
let num2: number = 0;
let num3: number = 0;
let fiveArray: number[] = [1, 2, 3, 4, 5];
[num1, num2, num3] = fiveArray;

// 数组展开运算符
let twoArray: number[] = [0, 1];
fiveArray = [...twoArray, 2, 3, 5];

// 数组遍历
let colors: string[] = ["red", "green", "blue"];
for (let i of colors) {
  console.log(i);
}
