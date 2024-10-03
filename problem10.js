function sortKeysByValue(obj) {
    const entries = Object.entries(obj)
    entries.sort((a, b) => a[1] - b[1])
    return Object.fromEntries(entries)
}

// Test case
const obj = {
    a: 3,
    b: 1,
    c: 2
};
console.log(sortKeysByValue(obj)); 
// Output: { b: 1, c: 2, a: 3 }