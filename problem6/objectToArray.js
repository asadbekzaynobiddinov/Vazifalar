export const objectToArray = (obj) => {
    return Object.entries(obj).map(([key, value]) => ({ key, value }))
}
