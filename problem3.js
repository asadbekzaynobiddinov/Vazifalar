function myFunc(setArr) {
    let countHr = 0, countIt = 0
    let sumHr = 0, sumIt = 0
    let department
    for(let obj of setArr){
        if(obj['department'] === 'HR'){
            sumHr += obj['salary']
            countHr++ 
        } else if(obj['department'] === 'IT'){
            sumIt += obj['salary']
            countIt++
        }
    }
    let averageHr = Math.floor(sumHr / countHr)
    let aveargeIt = Math.floor(sumIt / countIt)
    if (averageHr > aveargeIt) {
        department = {
            department: 'HR',
            average: averageHr
        }
    }else{
        department = {
            department: "IT",
            average: aveargeIt
        }
    }


    return department
}

const employees = new Set([
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
])

let result = myFunc(employees)
console.log(result)
