const buffer = Buffer.from('👀').toJSON()

console.log(buffer) // prints <Buffer f0 9f 91 80>

console.log(JSON.stringify(buffer))
console.log(buffer.toString()) // prints 👀

console.log(buffer.toString('base64'))
console.log(buffer.toString('hex'))

