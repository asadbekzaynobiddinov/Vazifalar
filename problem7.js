function odamSoni(array){
    let count = 0
    for(let arr of array){
        count += arr[0]
        count -= arr[1]
    }
    return count
}

// Misollar
console.log(odamSoni([
    [10, 0],
    [3, 5],
    [5, 8]
])); // Output: 5

console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
])); // Output: 21
