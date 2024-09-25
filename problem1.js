function numberSplit(num) {
    let arr = []
    arr[0] = Math.floor(num / 2)
    arr[1] = num - Math.floor(num / 2)
    return arr
}

let result = numberSplit(11)
console.log(result);
