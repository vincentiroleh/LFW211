// subclassing native error constructors and use a code property.

// function doTask(amount) {
//     if (typeof amount !== 'number') throw new TypeError('amount must be a number')
//     if (amount <= 0) throw new RangeError('amount must be greater than zero')
//     if (amount % 2) {
//         const err = Error('amount must be even')
//         err.code = 'ERR_MUST_BE_EVEN'
//         throw err
//     }
//     return amount / 2
// }

// doTask(4)

// We can also inherit from Error ourselves to create a custom error instance for a particular use case. Let's create an OddError constructor: 

class OddError extends Error {
    constructor(varName = '') {
        super(`${varName} must be even`)
        this.code = 'ERR_MUST_BE_EVEN'
    }
    get name() { return `OddError [${this.code}]` }
}

// Now we'll update doTask to use OddError:

function doTask(amount) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number')
    if (amount <= 0) throw new RangeError('amount must be greater than zero')
    if (amount % 2) throw new OddError('amount')
    return amount / 2
}

doTask(3)
