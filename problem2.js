function find(peoples){
    let liveTime = 0
    let oldestPeople = ''
    for(let people of peoples){
        if(people['deathYear'] - people['birthYear'] > liveTime){
            liveTime = people['deathYear'] - people['birthYear']
            oldestPeople = people['name']
        }
    }
    return oldestPeople
}

const peoples = [
    { name: "Ali", birthYear: 1900, deathYear: 1980 },
    { name: "Vali", birthYear: 1920, deathYear: 1995 },
    { name: "Hasan", birthYear: 1915, deathYear: 2005 },
    { name: "Husan", birthYear: 1905, deathYear: 1960 }
]

let result = find(peoples)
console.log(result);
