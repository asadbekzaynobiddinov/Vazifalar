const squareNumber = function(number){
    number = String(number)
    let newNumber = ''
    for(let num of number){
        newNumber += Math.pow(+num, 2)
    }
    return Number(newNumber)
}

let result = squareNumber(3221)
console.log(result);
