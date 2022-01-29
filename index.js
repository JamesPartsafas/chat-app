const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { Socket } = require('./controllers/socket')

const path = require('path')
const router = require('./routes/router')
require('dotenv').config()
const port = process.env.PORT

//Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)
new Socket(io).setupEvents()

// Start server
server.listen(port, () => {
    console.log("Server is listening on port", port)
})
.on('error', (err) => {
    console.log("Error starting the server")
    console.log(err)
})

module.exports = {
    app
}