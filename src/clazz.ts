// 类的属性与方法

class Greeter {
  // 静态属性
  static cname: string = "greeter";

  // 成员属性
  greeting: string;

  // 构造函数 - 执行初始化操作
  constructor(message: string) {
    this.greeting = message;
  }

  // 静态方法
  static getClassName() {
    return "Class name is Greeter";
  }

  // 成员方法
  greet() {
    return "Hello" + this.greeting;
  }
}

let greeter = new Greeter("World");

// ECMA私有字段
class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}`);
  }
}

let semLinker = new Person("sss");
// semLinker.#name

// 访问器
let passcode = "Hello TS";
class Employee {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    if (passcode && passcode === "Hello TS") {
      this._fullName = value;
      return;
    }
    console.log("Error: Unauthorized update of employee");
  }
}

let employee = new Employee();
employee.fullName = "smeilinker";
if (employee.fullName) {
  console.log(employee.fullName);
}

// 类的继承
class Animal {
  constructor(public name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Snake extends Animal {
  constructor(public name: string) {
    super(name);
  }

  move(distance = 5) {
    super.move(distance);
  }
}

let snake = new Snake("Sammy the py");
snake.move();

/**
 * 使用abstract关键字声明的类，称之为抽象类。抽象类不能被实例化
 */
abstract class APerson {
  constructor(public name: string) {}

  abstract say(words: string): void;
}

class Developer extends APerson {
  constructor(name: string) {
    super(name);
  }

  say(words: string): void {
    console.log(`${this.name} says ${words}`);
  }
}

const lolo = new Developer("lolo");
lolo.say("ts");
