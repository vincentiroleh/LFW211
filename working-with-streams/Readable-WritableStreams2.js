'use strict'
const net = require('net')
const socket = net.connect(3000)

socket.on('data', (data) => {
    console.log('got data:', data.toString())
})

socket.write('hello')
setTimeout(() => {
    socket.write('all done')
    setTimeout(() => {
        socket.end()
    }, 250);
}, 3250);