class Socket {
    constructor(io) {
        this.io = io
    }

    setupEvents() {
        this.io.on('connection', (socket) => {

            socket.on('join-room', data => {
                socket.join(data.roomId)
                console.log(data.roomId)
            })

            socket.on('chat', data => {
                socket.broadcast.to(data.roomId).emit('new-message', data);
            })

            console.log("Connection")
        })
    }
}

module.exports = { Socket }
