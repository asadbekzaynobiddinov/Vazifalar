function countAll(string) {
    let countNums = 0
    let countLetters = 0
    for(let i of string){
        i = +i
        if(!isNaN(i)){
            countNums++
        } else {
            countLetters++
        }
    }
    return `Raqamlar: ${countNums}\nHarflar: ${countLetters}`
}

let result = countAll('14salom5')
console.log(result);
