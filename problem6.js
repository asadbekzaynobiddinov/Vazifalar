function returnVowel(array) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let returnedArray = []
    
    for (let str of array) {
        let chars = str.split('')
        let word = ''
        for (let harf of chars) {
            if (vowels.includes(harf)) {
                word += harf
            }
        }
        returnedArray.push(word)
    }
    return returnedArray
}

let result = returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"])
console.log(result)
