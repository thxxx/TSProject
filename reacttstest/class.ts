type Words = {
  [key: string]: string;
};
// 제한된 양의 property를 가지는 타입을 정의해주는 방법.
// object의 Type을 선언해야할 때 쓸 수 있다.
// 아주 중요하다고함! 왜인지는 모르겠지만?
// property이름은 모르지만 타입만을 알 때 사용.

class Dict {
  private words: Words;
  // constructor가, 즉, 인스턴스를 생성하는 시점에서 words를 정해주길 원하지 않기 때문에.

  constructor() {
    this.words = {}; // 수동으로 초기화시켜줬다.
  }
  add(word: Word) {
    // 클래스를 타입처럼 사용했다. 특정 클래스의 인스턴스이기를 원할 때!
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("김치", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
const mean = dict.def("김치");

console.log(mean);

type Team = "red" | "blue" | "yellow";

type Pla = {
  name: string;
  team: Team;
};

interface Plas {
  name: string;
  team: Team;
}

interface Users extends Plas {}

type User1 = {
  name: string;
};

type User2 = User1 & {};

interface Food {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Score {
  mat: number;
}

class Bosam implements Food, Score {
  constructor(
    public firstName: string, // 얘네는 항상 public이어야 한다.
    public lastName: string,
    public mat: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hi ${name}! I am ${this.fullName()}`;
  }
}
