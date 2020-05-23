const fs = require('fs')

const data = fs.readFileSync('./data', 'utf-8')
console.log(JSON.stringify(data))
const result = data.replace('\n', '$$enter$$')

