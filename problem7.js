function formatPhoneNumber(numbers) {
    if (numbers.length !== 10) {
        return "Arrayda 10 ta raqam bo'lishi kerak !!!"
    }

    let qism1 = numbers.slice(0, 3).join('')
    let qism2 = numbers.slice(3, 6).join('')
    let qism3 = numbers.slice(6).join('')

    return `(${qism1}) ${qism2}-${qism3}`
}

let result = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(result)
