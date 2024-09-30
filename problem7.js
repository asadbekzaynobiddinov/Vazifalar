class Box {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    getVolume() {
        return this.length * this.width * this.height
    }
}

function totalVolume(...boxes) {
    let total = 0
    for (let box of boxes) {
        total += box.getVolume()
    }
    return total
}

const box1 = new Box(2, 3, 4)
const box2 = new Box(5, 6, 7)
const box3 = new Box(1, 1, 1)

console.log(`Box 1 hajmi: ${box1.getVolume()}`)
console.log(`Box 2 hajmi: ${box2.getVolume()}`)
console.log(`Box 3 hajmi: ${box3.getVolume()}`)

const umumiyHajm = totalVolume(box1, box2, box3)
console.log(`Umumiy hajm: ${umumiyHajm}`)
