"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name) {
    console.log("Hello " + name);
}
const prenom = "bob";
hello(prenom);
hello(prenom + " marley");
function concat(a, b) {
    return a + b;
}
const wildCodeSchool = concat("Wild", concat("Code", "School"));
console.log(wildCodeSchool);
