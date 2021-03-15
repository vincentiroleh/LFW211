// Converting Strings to Buffers

// const buffer = Buffer.from('hello world')
const buffer = Buffer.from('A', 'utf8')

console.log(buffer)

console.log('👀'.length) // will print 2
console.log('💩' .length) // will print 2
console.log(Buffer.from('👀').length) // will print 4

