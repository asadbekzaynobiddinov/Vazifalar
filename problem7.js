function oddIndexedElements(arr) {
    let oddIndexs = []
    for(let i = 1; i < arr.length; i+=2){
        oddIndexs.push(arr[i])
    }
    return oddIndexs
}

// Test case
console.log(oddIndexedElements([1, 2, 3, 4, 5, 6])); 
// Output: [2, 4, 6]