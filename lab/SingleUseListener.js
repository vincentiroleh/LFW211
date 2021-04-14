'use strict'

/*
Register the listener function with the ee event emitter in such a way that the listener
function is only called a single time. If implemented correctly, the program should print out
passed!:
*/

const assert = require('assert')
const { EventEmitter } = require('events')

const ee = new EventEmitter();

let count = 0

setInterval(() => {
    ee.emit('tick')
}, 100)

function listener() {
    count++
    setTimeout(() => {
        assert.equal(count, 1)
        assert.equal(this, ee)
        console.log('passed!')
    }, 250);
}

// solution

ee.once('tick', listener)