const { promisify } = require('util');
// const { readFile } = require('fs');
const { readFile } = require('fs').promises;


// callback-based approach:

function myAsyncOperation(cb) {
    doSomethingAsynchronous((err, value) => { cb(err, value) })
}

myAsyncOperation(functionThatHandlesTheResult)

// promise-based approach:

function myAsyncOperation() {
    return new Promise((resolve, reject) => {
        doSomethingAsynchronous((err, value) => {
            if (err) reject(err)
            else (resolve(value))
        });
    });
}

const promise = myAsyncOperation();

// using the promisify function from the util module:

const doSomething = promisify(doSomethingAsynchronous)
function myAsyncOperation() {
    return doSomething()
}

const promise = myAsyncOperation()

// methods to handle promise success or failure are then and catch:

const promise = myAsyncOperation();
promise
    .then((value) => console.log(value))
    .catch((err) => console.error(err))


// Let's see promises in action with a more concrete example:

const readFileProm = promisify(readFile)

const promise = readFileProm(__filename)

promise.then((contents) => {
    console.log(contents.toString())
})

promise.catch((err) => {
    console.error(err)
})

readFile(__filename)
    .then((contents) => {
        console.log(contents.toString())
    })
    .catch(err => console.error(err))