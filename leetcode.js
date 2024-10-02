/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {

    let array = [];
    let number = 0;
    

    for (let i = 0; i < n; i++) {
        array[i] = [];
        for (let j = 0; j < n; j++) {
            array[i][j] = number;
            number++;
        }
    }
    
    let x = 0;
    let y = 0;

    const directions = {
        "UP": [-1, 0],
        "DOWN": [1, 0],
        "LEFT": [0, -1],
        "RIGHT": [0, 1]
    };

    for (let command of commands) {
        if (command in directions) {
            x += directions[command][0];
            y += directions[command][1];
        }
    }

    let finalPosition = (x * n) + y;
    return finalPosition;
};

