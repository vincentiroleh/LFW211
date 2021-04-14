'use strict'

// Implementing a Timeout Error

/*
Without removing any of the existing code, and without using a try/catch block add some
code which stops the process from crashing. When implemented correctly the process should
output passed!.
*/
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.on('error', (err) => err.message)

ee.emit('error', Error('timeout'))
