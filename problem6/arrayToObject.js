export const arrayToObject = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr.key] = curr.value
        return acc
    }, {})
}
