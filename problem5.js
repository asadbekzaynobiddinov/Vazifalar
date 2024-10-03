function rotateArrayLeft(arr, n) {
    n = n % arr.length
    return arr.slice(n).concat(arr.slice(0, n))
}

// Test case
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 
// Output: [3, 4, 5, 1, 2]
