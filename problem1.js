/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {s
    let charSet = new Set()
    let left = 0
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[left])
            left++
        }
        charSet.add(s[i])
        maxLength = Math.max(maxLength, i - left + 1)
    }

    return maxLength
};