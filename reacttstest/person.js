"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello" + this.name;
    }
}
exports.Person = Person;
const persons = new Person("Lee");
console.log(persons.sayHello());
const pl = ["daniel", 1];
const addSome = (a, b) => a + b;
const push = (config) => {
    if (typeof config === "string")
        console.log(config);
    else {
        console.log(config.path, config.state);
    }
};
const add = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
add(1, 2);
add(1, 2, 3); // 둘 다 가능해진다!
