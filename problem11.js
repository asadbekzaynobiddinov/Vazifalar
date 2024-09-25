function tubmi(number){
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            return false
        }
    }
    return true
}

function func(array) {
    let tubSonlar = []
    for(let item of array){
        if(tubmi(item)){
            tubSonlar.push(item)
        }
    }
    return tubSonlar
}

let result = func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(result);
