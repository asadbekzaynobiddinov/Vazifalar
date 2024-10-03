function uniqueConcat(arr) {
    let string = ''
    for(let item of arr){
        if (!string.includes(item)) {
            string += item
        }
    }
    return string
}

// Test case
console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 
// Output: "abcd"