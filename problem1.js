let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,

    addExpense: function(type, amount) {
        if (this.hasOwnProperty(type) && typeof amount === "number" && amount > 0) {
            this[type] += amount
            console.log(`${type} ga ${amount} qo'shildi. Yangi qiymat: ${this[type]}`)
        } else {
            console.log("Noto'g'ri xarajat turi yoki miqdori.")
        }
    },

    removeExpense: function(type, amount) {
        if (this.hasOwnProperty(type) && typeof amount === "number" && amount > 0) {
            this[type] = Math.max(0, this[type] - amount)
            console.log(`${type} dan ${amount} olib tashlandi. Yangi qiymat: ${this[type]}`)
        } else {
            console.log("Noto'g'ri xarajat turi yoki miqdori.")
        }
    },

    printMonthlyReport: function() {
        console.log(`Suv uchun oylik xarajat: $${this.water}`)
        console.log(`Gaz uchun oylik xarajat: $${this.gas}`)
        console.log(`Elektr energiyasi uchun oylik xarajat: $${this.electricity}`)
    }
}

Expenses.addExpense("water", 50) 
Expenses.addExpense("gas", 30)  
Expenses.removeExpense("water", 20) 
Expenses.printMonthlyReport() 
