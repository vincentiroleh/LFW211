const { EventEmitter } = require('events')

const myEmitter = new EventEmitter();



class MyEmitter extends EventEmitter {
    constructor(opts = {}) {
        super(opts)
        this.name = opts.name
    }
}

// To emit an event call the emit method:
myEmitter.emit('an-event', some, args)

// The following is an example of using emit with inheriting from EventEmitter:
class MyEmitter extends EventEmitter {
    constructor(opts = {}) {
        super(opts)
        this.name = opts.name
    }
    destroy(err) {
        if (err) { this.emit('error', err) }
        this.emit('close')
    }
}

// Listening for Events

const ee = new EventEmitter()
ee.on('close', () => { console.log('close event fired!') })
ee.emit('close')