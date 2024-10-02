class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

const object = new Person('Ali', 19)
console.log(object instanceof Person);
