const mixin = {
    greet(name){
        console.log(`Hello my nama is ${name}`)
    },

    depart(){
        console.log('Good by have a nice day')
    }
}

class Person {
    constructor(name) {
        this.name = name
    }
}

Object.assign(Person.prototype, mixin)

const person = new Person('Ali')
person.greet(person.name)
person.depart()