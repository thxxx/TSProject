export class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return "Hello" + this.name;
  }
}

const persons = new Person("Lee");

console.log(persons.sayHello());

const pl: readonly [string, number] = ["daniel", 1];

type Add = (a: number, b: number) => number;

const addSome: Add = (a, b) => a + b;

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (confing: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};

type Ads = {
  (a: number, b: number, c: number): number;
  (a: number, b: number): number;
};

const add: Ads = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3); // 둘 다 가능해진다!

// type SuperPrint = {
//   (arr: number[]): void;
//   (arr: boolean[]): void;
// };

type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3]);
superPrint([true, false, true]);
superPrint([1, false, true]);
superPrint([true, "false", true]);

console.log(a);

const pprint = <V>(arr: V[]): boolean => false;

const ww = pprint<number>([1, 2, 3]);

type Player<E> = {
  name: string;
  extraInfo: E;
};

const ji: Player<{ favFood: string }> = {
  name: "hoji",
  extraInfo: {
    favFood: "HOWI",
  },
};

const jae: Player<null> = {
  name: "jaeun",
  extraInfo: null,
};

const awfe: Array<number> = [1, 2, 3];
