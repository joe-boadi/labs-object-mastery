/*
. Object Methods and this:
• Experiment with calling greet() directly on the Person object, using call(), 
apply(), and bind(). Observe how the value of this changes in each 
context.
*/
const Person = {
    name: "John",
    age: 25,
    greet: function () {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    }
}
//TEST
const greet = Person
console.log(greet)
