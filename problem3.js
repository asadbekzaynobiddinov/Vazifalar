const os = require('os')

const hostname = os.hostname()

const username = os.userInfo().username

console.log(`Hostname: ${hostname}, Username: ${username}`)
