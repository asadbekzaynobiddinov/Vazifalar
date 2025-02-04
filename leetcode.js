/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let array = []
    for(let i = 1; i <= n; i++){
        if (i % 5 == 0 && i % 3 == 0){
            array.push('FizzBuzz')
        } else if (i % 3 == 0){
            array.push('Fizz')
        } else if (i % 5 == 0){
            array.push("Buzz")
        } else {
            array.push(`${i}`)
        }
    }
    return array
};