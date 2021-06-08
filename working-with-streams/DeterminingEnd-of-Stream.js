'use strict'

/*
    *Determining End-of-Stream*

As we discussed earlier, there are at least four ways for a stream to potentially become inoperative:

close event
error event
finish event
end event
We often need to know when a stream has closed so that resources can be deallocated, otherwise memory leaks become likely.

Instead of listening to all four events, the stream.finished utility function provides a simplified way to do this:
*/

const net = require('net')
const { finished } = require('stream')

net.createServer((socket) => {
    const interval = setInterval(() => {
        socket.write('beat')
    }, 1000)
    socket.on('data', (data) => {
        socket.write(data.toString().toUpperCase())
    })
    finished(socket, (err) => {
        if (err) {
            console.error('there was a socket error', err)
        }
        clearInterval(interval)
    })
}).listen(3000)