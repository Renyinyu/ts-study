// 类型守卫

// in 关键字
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Admin | Employee;

function printEmplyeeInformation(emp: UnknownEmployee) {
  console.log("Name:" + emp.name);

  if ("privileges" in emp) {
    console.log("privileges,", emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("start date:", emp.startDate);
  }
}

// typeof关键字
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return [padding + 1].join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected string or number', got ${padding}`);
}

// instanceof 关键字
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadding implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString(): string {
    return [this.numSpaces + 1].join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString(): string {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadding(6);

if (padder instanceof SpaceRepeatingPadding) {
  // padder的类型收窄为'SpaceRepeatingPadding'
}

// 自定义类型保护得类型谓词
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

const res = isNumber("222");
