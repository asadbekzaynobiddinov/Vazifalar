function minRemoveToMakeValid(s) {
    let openCount = 0
    let closeCount = 0

    for (let char of s) {
        if (char === '(') openCount++
        if (char === ')') {
            if (openCount > 0) {
                openCount--
            } else {
                closeCount++
            }
        }
    }

    let result = ''
    let openToRemove = openCount 
    let closeToRemove = closeCount 

    for (let char of s) {
        if (char === '(' && openToRemove > 0) {
            openToRemove--
            continue
        }
        if (char === ')' && closeToRemove > 0) {
            closeToRemove-- 
            continue
        }
        result += char 
    }

    return result
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("a)b(c)d"))   
console.log(minRemoveToMakeValid("))(("))         
