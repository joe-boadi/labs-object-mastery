const Person = {
    name: "John",
    age: 25,
    greet: function () {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    }
}
//TEST
const greetWithBind = Person.greet.bind(Person) // practically returns a function.
// console.log(greetWithBind)
const greetWithApply = Person.greet.apply(Person)
// console.log(greetWithApply)
const greetWithCall = Person.greet.call(Person)
// console.log(greetWithCall)

function handleClick() {
    console.log(this.id)
    console.log(this.textContent) // logs content of tag to console
}
// Behavior of 'this' keyword in the arrow function
const handleClickWithArrow = () => {
    console.log(this.id) // returns undefined
    console.log(this.textContent)
}

let btn = document.getElementById('btn').addEventListener( 'click',handleClick )
let btnWithArrow = document.getElementById('btn').addEventListener( 'click',handleClickWithArrow )

function createCounter() {
    let count = 0
    const obj = {
        increment: function(){
           console.log(this.count) //returns undefined: absence of count in obj
        },
        getCount: function(){
        return count // access the value in the scope of the parent function.
        }
    }
    return obj
}

function createTimer(duration, elementId){
    // setInterval as closure to createTimer
   const durationTimer = setInterval(()=>{
    let timer = document.getElementById(`${elementId}`)
    //Access argument duration with the this keyword
    this.duration = duration

    duration-- //decrease duration by 1
        timer.textContent = duration
        if(duration === 0) {
            clearInterval(durationTimer) // keep interval at 0
            console.log('Time up!')
        }
    }, 1000) // decrease duration at every 1sec
}

createTimer(10,"timer")

