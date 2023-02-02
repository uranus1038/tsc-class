"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getNumber(age) {
        return this.age = age;
    }
}
const person = new Person("you", "Aum");
console.log(person.getFullName()); // Output: "John Doe"
