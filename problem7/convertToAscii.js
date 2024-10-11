export function convertToAscii(string) {
    return string.split('').map(char => char.charCodeAt(0))
}