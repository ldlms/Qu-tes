"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        return `i am ${this.name}`;
    }
    tellMyAge() {
        return `i am ${this.age} years old`;
    }
}
const personne1 = new Person('john', 45);
const personne2 = new Person('mary', 35);
console.log(`hi,${personne1.tellMyName()} and ${personne1.tellMyAge()}`);
console.log(`hi,${personne2.tellMyName()} and ${personne2.tellMyAge()}`);
