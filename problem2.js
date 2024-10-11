var addTwoNumbers = function(l1, l2) {
    let num1 = Number(l1.reverse().join(''))
    let num2 = Number(l2.reverse().join(''))
    let sum = String(num1 + num2).split('')
    sum = sum.reverse().join('')
    let result = []
    for(let number of sum){
        result.push(+number)
    }
    console.log(result)
};


addTwoNumbers([2,4,3],[5,6,4])
addTwoNumbers([0], [0])
addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])
