function sumObjectValues(obj) {
    let sum = 0

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key]
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            sum += sumObjectValues(obj[key])
        }
    }

    return sum
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};

console.log(sumObjectValues(obj)); 
// Output: 6
