const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/router')
require('dotenv').config()
const port = process.env.PORT

//Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)

//Start app
app.listen(port, () => {
    console.log("Server is listening on port", port)
})
.on('error', (err) => {
    console.log("Error starting the server")
    console.log(err)
})

module.exports = app