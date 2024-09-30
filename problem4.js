class BankAccount {
    constructor(ownerName, accountNumber) {
        this.ownerName = ownerName
        this.balance = 0
        this.accountNumber = accountNumber
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log('Iltimos, ijobiy summa kiriting!')
            return
        }
        this.balance += amount
        console.log(`${this.ownerName} hisobiga ${amount} so'm qo'shildi. Yangi balans: ${this.balance} so'm`)
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log('Iltimos, ijobiy summa kiriting!')
            return
        }
        if (amount > this.balance) {
            console.log('Yetarli balans mavjud emas!')
            return
        }
        this.balance -= amount
        console.log(`${this.ownerName} hisobidan ${amount} so'm yechildi. Yangi balans: ${this.balance} so'm`)
    }

    showBalance() {
        console.log(`${this.ownerName} hisob raqami: ${this.accountNumber}, joriy balans: ${this.balance} so'm`)
    }
}

const user1 = new BankAccount('Ali', '1001')
const user2 = new BankAccount('Vali', '1002')

user1.deposit(50000)
user1.withdraw(15000)
user1.showBalance()

user2.deposit(80000)
user2.withdraw(30000)
user2.showBalance()
