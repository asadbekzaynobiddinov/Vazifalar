const os = require('os')

const command = process.argv[2]

if (command === 'check-memory') {
  const freeMemory = os.freemem()
  const freeMemoryMB = (freeMemory / (1024 * 1024)).toFixed(2)
  console.log(`Joriy bo'sh xotira hajmi: ${freeMemoryMB} MB`)
} else {
  console.log("check-memory  buyrug'ini kiriting !!!");
}
