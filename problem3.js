const num1 = parseFloat(process.argv[2])
const operation = process.argv[3]
const num2 = parseFloat(process.argv[4])

let result

if (isNaN(num1) || isNaN(num2)) {
  console.log("Iltimos, to'g'ri sonlar kiriting")
  process.exit()
}

switch (operation) {
  case '+':
    result = num1 + num2
    break
  case '-':
    result = num1 - num2
    break
  case '*':
    result = num1 * num2
    break
  case '/':
    if (num2 === 0) {
      console.log("Nolga bo'lib bo'lmaydi")
      process.exit()
    }
    result = num1 / num2
    break
  default:
    console.log("Noto'g'ri amal kiritildi")
    process.exit()
}

console.log(`Natija: ${result}`)


// amalni node probem3.js 10 + 5 korinishida berasiz
