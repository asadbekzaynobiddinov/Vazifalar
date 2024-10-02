class Product {
    constructor(nomi, miqdori, narxi) {
        this.nomi = nomi
        this.miqdori = miqdori
        this.narxi = narxi
    }

    get productInfo() {
        return `Nomi: ${this.nomi}, Miqdori: ${this.miqdori}, Narxi: ${this.narxi}`
    }

    set setPrice(newPrice) {
        this.narxi = newPrice
    }
}

const tovar = new Product('Olma', 10, 5000)
console.log(tovar.productInfo)
tovar.setPrice = 10000
console.log(tovar.productInfo)


function FindAllMethods(obj) {
    return Object.keys(obj).filter(key => typeof obj[key] === 'function')
}

console.log(FindAllMethods(tovar))

function InvertKeyValue(obj) {
    let invertedObj = {}
    for (let key in obj) {
        invertedObj[obj[key]] = key
    }
    return invertedObj
}

console.log(InvertKeyValue({red: 'qizil', green: 'yashil'}))
