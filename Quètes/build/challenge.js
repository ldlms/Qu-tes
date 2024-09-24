"use strict";
const prettyPrintWilder = (users) => {
    users.map((user) => {
        if (user.age) {
            console.log(`${user.name} is ${user.age} years old`);
        }
        else if (user.birthday) {
            console.log(`${user.name} was born on ${user.birthday.getFullYear()}`);
        }
    });
};
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: new Date("10/02/1990") };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
