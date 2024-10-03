function removeDigits(str) {
    let newStr = ''
    for(let letter of str){
        if(isNaN(+letter)){
            newStr += letter
        }
    }
    return newStr
}

// Test case
console.log(removeDigits("abc123def456")); 
// Output: "abcdef"