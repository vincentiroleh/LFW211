// Parallel Execution

/*
The opA function must be called before opB, and opB must be called before opC.
Call functions in parallel.js in such a way that C then B then A is printed out.
*/

const print = (err, contents) => {
    if (err) console.error(err)
    else console.log(contents)
}

const opA = (cb) => {
    setTimeout(() => {
        cb(null, 'A')
    }, 500);
}

const opB = (cb) => {
    setTimeout(() => {
        cb(null, 'B')
    }, 200);
}

const opC = (cb) => {
    setTimeout(() => {
        cb(null, 'C')
    }, 125);
}

// Solution

async function Call() {
    opA(print)
    opB(print)
    opC(print)
}
Call().catch(console.error)