function sumOfCubes(array) {
    let sum = 0;
    for(let i of array){
        sum += i * i * i
    }
    return sum
}

let result = sumOfCubes([1, 5, 9])
console.log(result);
