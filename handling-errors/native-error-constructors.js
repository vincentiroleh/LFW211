// Error is the native constructor for generating an error object. To create an error, call new Error and pass a string as a message:

new Error('This is an error message')

/*
** There are six other native error constructors that inherit from the base Error constructor, these are:

    * EvalError
    * SyntaxError
    * RangeError
    * ReferenceError
    * TypeError
    * URIError
*/

// RangeError and TypeError

function doTask (amount) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number')
    if (amount <= 0) throw new RangeError('amount must be greater than zero')
    return amount / 2
}

doTask('here is some invalid input'); // TypeError
doTask(-1); // RangeError