class Circle {
    constructor(radius) {
        this.radius = radius
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius
    }
}

const circle1 = new Circle(3)
const circle2 = new Circle(5)

console.log(`Circle 1: Yuzasi = ${circle1.getArea().toFixed(2)}, Perimetri = ${circle1.getPerimeter().toFixed(2)}`)
console.log(`Circle 2: Yuzasi = ${circle2.getArea().toFixed(2)}, Perimetri = ${circle2.getPerimeter().toFixed(2)}`)
