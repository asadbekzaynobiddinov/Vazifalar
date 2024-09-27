function myFunc(setArr) {
    let student
    let highAverage = 0
    for(let obj of setArr){
        let average = 0
        for(let number of obj['scores']){
            average += number
        }
        average = Math.floor(average / obj['scores'].length)
        if(average > highAverage){
            student = obj
            highAverage = average
        }
    }
    return student
}


const students = new Set([
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ]);


let result = myFunc(students)
console.log(result);
