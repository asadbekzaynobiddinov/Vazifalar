function stepOne(value) {
    return new Promise((resolve, reject) => {
        console.log(`Bosqich 1: ${value} ga 10 qo'shish...`)
        setTimeout(() => {
            if (value) {
                resolve(value + 10)
            } else {
                reject('Bosqich 1da xato: noto‘g‘ri qiymat')
            }
        }, 1000)
    })
}

function stepTwo(value) {
    return new Promise((resolve, reject) => {
        console.log(`Bosqich 2: ${value} ni 2 ga ko'paytirish...`)
        setTimeout(() => {
            if (value) {
                resolve(value * 2)
            } else {
                reject('Bosqich 2da xato: noto‘g‘ri qiymat')
            }
        }, 1000)
    })
}

function stepThree(value) {
    return new Promise((resolve, reject) => {
        console.log(`Bosqich 3: ${value} dan 5 ni ayirish...`)
        setTimeout(() => {
            if (value) {
                resolve(value - 5)
            } else {
                reject('Bosqich 3da xato: noto‘g‘ri qiymat')
            }
        }, 1000)
    })
}

stepOne(5)
    .then(result => {
        console.log(`1-bosqich natijasi: ${result}`)
        return stepTwo(result)
    })
    .then(result => {
        console.log(`2-bosqich natijasi: ${result}`)
        return stepThree(result)
    })
    .then(result => {
        console.log(`3-bosqich natijasi: ${result}`)
    })
    .catch(error => {
        console.error(`Xato yuz berdi: ${error}`)
    })
