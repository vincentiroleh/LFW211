// Serial Execution

/*
Call the functions in such a way that A then B then C is printed out.

Remember promisify can be used to convert a callback API to a promise-based API.
The promisify function is included at the top of serial.js in case a promise based solution
is preferred.
*/

const { promisify } = require('util')

const print = (err, contents) => {
    if (err) console.error(err)
    else console.log(contents)
}
const opA = (cb) => {
    setTimeout(() => {
        cb(null, 'A')
    }, 500)
}
const opB = (cb) => {
    setTimeout(() => {
        cb(null, 'B')
    }, 250)
}
const opC = (cb) => {
    setTimeout(() => {
        cb(null, 'C')
    }, 125)
}

// Solution




function timeInterval(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds)
    })
}


async function run() {
    await timeInterval(1000);
    opA(print);
    await timeInterval(2000);
    opB(print);
    await timeInterval(3000);
    opC(print);
}

run();