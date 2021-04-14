const { EventEmitter } = require('events');

const ee = new EventEmitter();


ee.once('my-event', () => { console.log('1st') })
ee.on('my-event', () => { console.log('2nd') })
ee.prependListener('my-event', () => console.log('3rd'))
// ee.emit(('my-event'));
// ee.emit(('my-event'));
// ee.emit(('my-event'));

// Removing Listeners

/*
The removeListener method can be used to remove a previously registered listener.
The removeListener method takes two arguments, the event name and the listener function.
*/

const listener1 = () => console.log('listener 1')
const listener2 = () => console.log('listener 2')

ee.on('an-event', listener1)
ee.on('an-event', listener2)
ee.on('another-event', () => console.log('another event'))


// setInterval(() => {
//     ee.emit('an-event')
// }, 200);

// setTimeout(() => {
//     ee.removeListener('an-event', listener1)
// }, 500);

// setTimeout(() => {
//     ee.removeListener('an-event', listener2)
// }, 1100);


// The removeAllListeners method can be used to remove listeners without having a reference to their function. It can take either no arguments in which case every listener on an event emitter object will be removed, or it can take an event name in order to remove all listeners for a given event.

// setInterval(() => {
//     ee.emit('an-event')
//     ee.emit('another-event')
// }, 200);

// setTimeout(() => {
//     ee.removeAllListeners('an-event')
// }, 500);

// setTimeout(() => {
//     ee.removeAllListeners()
// }, 1100);


// The error Event

// Emitting an 'error' event on an event emitter will cause the event emitter to throw an exception if a listener for the 'error' event has not been registered:

process.stdin.resume() // keep process alive

ee.on('error', (err) => {
    console.log('got error:', err.message)
})

ee.emit('error', new Error('oh oh'))