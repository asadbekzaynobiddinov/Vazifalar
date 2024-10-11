import { objectToArray, arrayToObject, stringToBoolean } from './index.js'

const myObject = { a: 1, b: 2, c: 3 }
const myArray = objectToArray(myObject)
console.log('Obyektni massivga o\'zgartirish', myArray)

const newObject = arrayToObject(myArray)
console.log('Massivni obyektga o\'zgartirish', newObject)

const booleanValue = stringToBoolean('true')
console.log('Satrni mantiqiy qiymatga o\'zgartirish', booleanValue)

try {
    stringToBoolean('notBoolean')
} catch (error) {
    console.error('Xato', error.message)
}