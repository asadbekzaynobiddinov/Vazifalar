const magic = {
    replace(a, b) {
        return a.replace(b);
    },
    
    length(data) {
        return data.length;
    },
    
    toUpperCase(str) {
        const obj = {};
        for (let i = 0; i < str.length; i++) {
            obj[str[i]] = str[i].toUpperCase();
        }
        return obj;
    },
    
    repeat(data, n) {
        return data.repeat(n);
    },

    count(str) {
        let obj = {};
        for (let letter of str) {
            obj[letter] = findCount(str, letter);
        }
        return obj;
    }
};

function findCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

let upperCaseResult = magic.toUpperCase('salom');
console.log(upperCaseResult);

let repeatResult = magic.repeat('salom', 3);
console.log(repeatResult);

let countResult = magic.count('salom');
console.log(countResult);
