class Socket {
    constructor(io) {
        this.io = io
    }

    setupEvents() {
        this.io.on('connection', (socket) => {

            socket.on('chat', data => {
                socket.broadcast.emit('new-message', data);
            })

            console.log("Connection")
        })
    }
}

module.exports = { Socket }
