function objectToArray(obj) {
    let array = []
    for(let key in obj){
        array.push([key, obj[key]])
    }
    return array
}

// Test case
const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objectToArray(obj)); 
// Output: [["a", 1], ["b", 2], ["c", 3]]