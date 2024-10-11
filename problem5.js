const EventEmitter = require('events')
const readline = require('readline')

const eventEmitter = new EventEmitter()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

eventEmitter.on('dataReceived', (input) => {
    console.log(`Kiritilgan ma'lumot: ${input}`)
})

rl.on('line', (input) => {
    eventEmitter.emit('dataReceived', input)
})
