function myFunc(string) {
    let arr = string.split(' ')
    let str = ''
    for (let word of arr){
        if(word.length > 3){
            str += `${word[0]}${word.length - 2}${word[word.length - 1]} `
        }else {
            str += `${word} `
        }
    }
    return str
}

let result = myFunc("Every developer likes to mix kubernetes and javascript")
console.log(result);
