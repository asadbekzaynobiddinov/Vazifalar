const Animal = {
    sound(name){
        console.log(`${name} ovoz chiqardi`);
    },

    jump(name){
        console.log(`${name} sakradi`)
    },

    run(name){
        console.log(`${name} yuguryapti`)
    },

    eat(name){
        console.log(`${name} ovqatlanyapti`)
    }
}

class Dog {
    constructor(name) {
        this.name = name
    }
}

class Cat {
    constructor(name) {
        this.name = name
    }
}

Object.assign(Dog.prototype, Animal)
Object.assign(Cat.prototype, Animal)

const dog = new Dog('Reks')
const cat = new Cat('Kuchu')

dog.sound(dog.name)
dog.jump(dog.name)
dog.run(dog.name)
dog.eat(dog.name)


cat.sound(cat.name)
cat.jump(cat.name)
cat.run(cat.name)
cat.eat(cat.name)

