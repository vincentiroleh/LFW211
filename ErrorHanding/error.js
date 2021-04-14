// Throwing Error

function doTask(amount) {
    if (typeof amount != 'number') throw new Error('amount must be a number')
    return amount / 2
}

doTask(4);

// Native Error Constructors
let err = new Error('this is an error message');
// console.log( err.message);

function doTask1(amount) {
    if (typeof amount != 'number') throw new TypeError('amount must be a number')
    if (amount <= 0) throw new RangeError('amount must be greater than zero')
    return amount / 2
}

doTask1(5);

// Custom Errors

function doTaskEven(amount) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number')
    if (amount <= 0) throw new RangeError('amount must be greater than zero')
    if (amount % 2) {
        const err = Error('amount must be even')
        err.code = 'ERR_MUST_BE_EVEN'
        throw err
    }
    return amount / 2
}

doTaskEven(6);

class OddError extends Error {
    constructor(varName = '') {
        super(varName + ' must be even')
        this.code = 'ERR_MUST_BE_EVEN'
    }
    get name() { return 'OddError [' + this.code + ']' }
}

function doTaskOddError(amount) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number')
    if (amount <= 0) throw new RangeError('amount must be greater than zero')
    if (amount % 2) throw new OddError('amount')
    return amount / 2
}

doTaskOddError(4)


// tyr / catch

// try {
//     const result = doTaskOddError(8)
//     console.log('result', result)
// } catch (error) {
//     console.error('Error caught: ', error)
// }

try {
    const result = doTask(3)
    console.log('result', result)
} catch (err) {
    if (err instanceof TypeError) { console.error('wrong type') }
    else if (err instanceof RangeError) { console.error('out of range') }
    else if (err instanceof OddError) { console.error('cannot be odd') }
    else { console.error('Unknown error', err) }
}