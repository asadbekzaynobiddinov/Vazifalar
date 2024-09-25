function multiply(array, number) {
    let returnedArray = []
    for(let i of array){
        returnedArray.push(i*number)
    }
    return returnedArray
}

let result = multiply([1, 2, 3, 4], 2)
console.log(result);
