function checkout(items) {
    let total = 0
    const taxRate = 0.06

    for (let item of items) {
        let itemTotal = item.prc * item.qty
        if (item.taxable) {
            itemTotal += itemTotal * taxRate
        }
        total += itemTotal
    }

    return total.toFixed(2)
}

const result = checkout([
    { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
    { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
    { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
])

console.log(result)
