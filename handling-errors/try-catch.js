// Let's write a small utility function for adding a code to an error object:

function codify (err, code) {
    err.code = code
    return err
}

class OddError extends Error {
    constructor(varName = '') {
        super(`${varName} must be even`)
        this.code = 'ERR_MUST_BE_EVEN'
    }
    get name() { return `OddError [${this.code}]` }
}

// Now we'll update doTask to use OddError:

function doTask(amount) {
    if (typeof amount !== 'number') throw codify(new TypeError('amount must be a number'), 'ERR_AMOUNT_MUST_BE_NUMBER')
    if (amount <= 0) throw codify(new RangeError('amount must be greater than zero'), 'ERR_AMOUNT_MUST_EXCEED_ZERO')
    if (amount % 2) throw new OddError('amount')
    return amount / 2
}

try {
    const result = doTask(4)
    result()
    console.log('result: ', result)
} catch (err) {
    if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') console.error('wrong type')
    else if (err.code === 'ERR_AMOUNT_MUST_EXCEED_ZERO') console.error('out of range')
    else if (err.code === 'ERR_MUST_BE_EVEN') console.error('cannot be odd')
    else console.error('Unknown error', err)
}

