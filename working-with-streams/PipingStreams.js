'use strict'
const net = require('net')
const socket = net.connect(3000)

socket.pipe(process.stdout)

socket.write('hello')
setTimeout(() => {
    socket.write('all done')
    setTimeout(() => {
        socket.end()
    }, 250)
}, 3250)