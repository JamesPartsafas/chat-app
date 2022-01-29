class Socket {
    constructor(io) {
        this.io = io
    }

    setupEvents() {
        this.io.on('connection', (socket) => {
            console.log("Connection")
        })
    }
}

module.exports = { Socket }
