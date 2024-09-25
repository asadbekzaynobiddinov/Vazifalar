function findPrimeNumber(array) {
    for(let i of array){
        if(i % 2 == 1){
            return i
        }
    }
    return `Toq son topilmadi`
}

let result = findPrimeNumber([4, 12, 42, 9,12, 3])
console.log(result);
