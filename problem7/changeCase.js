export function changeCase(string, isUpper = true) {
    return isUpper ? string.toUpperCase(): string.toLowerCase()
}

// bu koddagi isUpperni false qilsangiz hamma harflarni kichik harfga ogirib beradi