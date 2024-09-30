function numInStr(array){
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let resultArray = []
    for (let str of array){
        for(let letter of str){
            if(nums.includes(letter)){
                resultArray.push(str)
            }
        }
    }
    return resultArray
}

let result = numInStr(["a", "a", "b", "b"])
console.log(result);
