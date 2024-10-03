function doubleValues(obj) {
    
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            doubleValues(obj[key]);
        }
    }

    return obj
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

console.log(doubleValues(obj)); 
// Output: 6
