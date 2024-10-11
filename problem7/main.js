import { filterArray, sortArray, convertToAscii, changeCase } from './index.js'

const array = [5, 3, 8, 1]
const filteredArray = filterArray(array, num => num % 2 == 0)
console.log('Filtered Array', filteredArray)

const sortedArray = sortArray(array)
console.log('Sorted Array', sortedArray)

const asciiValues = convertToAscii('Hello')
console.log('ASCII Values', asciiValues)

const upperCaseStr = changeCase('HeLlo', false)
console.log('Uppercase String', upperCaseStr)
