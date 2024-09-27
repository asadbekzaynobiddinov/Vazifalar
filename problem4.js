function mostSpokenLanguages(countries, count) {
    let sortedLanguages = Array.from(countries).sort((a, b) => {
        let valA = Object.values(a)[0]
        let valB = Object.values(b)[0]
        return valB - valA
    })

    return sortedLanguages.slice(0, count)
}

let countries = new Set([
     { Russian: 9 },
     { English: 91 },
     { French: 45 },
     { Spanish: 24 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Arabic: 25 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
])

console.log(mostSpokenLanguages(countries, 3))
