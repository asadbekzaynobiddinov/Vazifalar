function parseJsonString(jsonString) {
    try {
        let parsedData = JSON.parse(jsonString)
        console.log("Pars muvaffaqiyatli:", parsedData)
    } catch (error) {
        console.log("Xato yuz berdi:", error.message)
    }
}

let correctJson = '{"name": "John", "age": 30}'
parseJsonString(correctJson)

let incorrectJson = '{"name": "John", "age": 30'
parseJsonString(incorrectJson)
