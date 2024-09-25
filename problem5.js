// bu algoritm arayning birinchi sonini ikkinchi soniga kopaytiradi keyingi sonlarning ahamiyati yoq

function func(array) {
    let sum = 0
    for(let i = 0; i < array[1]; i++){
        sum += array[0]
    }
    return sum
}

let result = func([3, 4])
console.log(result);
