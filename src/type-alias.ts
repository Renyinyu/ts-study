// 联合类型和类型别名

// 1. 联合类型（通常与null或undefined一起使用）
const sayHello = (name: string | undefined) {}

/**
 * 可辨识联合
 * 1. 可辨识：要求联合类型中每个元素都含有一个单例类型属性（如下的vType属性）
 */
enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface MotoCycle {
  vType: 'motocycle',
  make: number
}
interface Car {
  vType: 'car',
  transmission: CarTransmission
}
interface Truck {
  vType: 'truck',
  capacity: number
}

// 2.类型守卫
type Vehicle = MotoCycle | Car | Truck
const EVALUATION_FACTOR = Math.PI
function evaluatePrice(vehicle: Vehicle) {
  switch(vehicle.vType) {
    case 'car':
      return vehicle.transmission * EVALUATION_FACTOR
    case 'truck':
      return vehicle.capacity * EVALUATION_FACTOR
    case 'motocycle':
      return vehicle.make * EVALUATION_FACTOR
  }
}



// 类型别名（给一个类型起个新名字）
type Message = string | string[];

let greet = (message: Message) => {}


// 交叉类型（将多个类型合并为一个类型）
type PartialPointX = { x: number }
type Point = PartialPointX & {y:number}

let point: Point = {x: 1, y: 2}


// 同名基础类型属性得合并
// 问题：合并多个类型过程中，出现某些类型存在相同的成员，但对应类型不一致

interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string;
}

type XY = X & Y;
type YX = Y & X;

let p: XY;
let q: YX;

p = { c: 2, d: '2', e: '222' } // 由于合并后成员c既可以是string类型又可以是number类型，不存该种类型，所以混入后c的类型为never

// 同名非基础类型的合并

interface D { d: boolean }
interface E { e: string}
interface F { f: number }

interface A { x: D }
interface B { x: E}
interface C { x: F }

type ABC = A & B & C

let abc: ABC = {
  x: {
    d: true,
    e: 'linker',
    f: 222
  }
}


