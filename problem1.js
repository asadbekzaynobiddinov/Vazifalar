function sortKeys(obj) {
    const entries = Object.entries(obj)
    entries.sort((a, b) => a[1] - b[1])
    return Object.fromEntries(entries)
}

// Test case
const obj = {
    b: 2,
    a: 1,
    c: 3
};

console.log(sortKeys(obj)); 
// Output: { a: 1, b: 2, c: 3 }