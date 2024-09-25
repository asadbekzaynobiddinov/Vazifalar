function minMax(array){
    let min = Math.min(...array)
    let max = Math.max(...array)
    return [min, max]
}

let result = minMax([1, 2, 3, 4, 5])
console.log(result);
