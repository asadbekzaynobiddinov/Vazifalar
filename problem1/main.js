import fs from 'fs'

function writeNums(){
    for (let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 100 + 1);
        fs.appendFile('numbers.txt', random + '\n', (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    }
}

// writeNums()

function readNums(){
    fs.readFile('problem1/numbers.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Raqamlar olinmadi')
        }
        let array = data.split('\n').map(Number)
        console.log(array)
    })
}

readNums()
