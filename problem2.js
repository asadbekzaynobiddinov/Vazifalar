function myFunc(name, callback){
    callback(name)
}

function greet(name) {
    console.log(`Hello my name is ${name}`);
}

myFunc('Asadbek', greet)