function splitWords(text) {
    let words = text.split(' ')
    let result = []

    for (let word of words) {
        if (word.length > 10) {
            let middle = Math.floor(word.length / 2)
            if (word.length % 2 === 0) {
                result.push(word.slice(0, middle) + '-' + word.slice(middle))
            } else {
                result.push(word.slice(0, middle + 1) + '-' + word.slice(middle + 1))
            }
        } else {
            result.push(word)
        }
    }
    return result.join('-')
}

let text
console.log(splitWords(text))
