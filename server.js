const express = require('express');
const http = require('http')
const app = express();

// APPLICATION
app.use('*', (req, res) => {
    res.status(200).send({
        message: "Congratz. It's the time to cry :)"
    })
})

// SETTING THE SERVER
const PORT = process.env.PORT || 3500
const server = http.createServer(app)
server.listen(PORT);
