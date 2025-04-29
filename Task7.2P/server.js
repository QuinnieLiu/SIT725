const express = require('express');
const path = require('path');
const { Socket } = require('socket.io');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests) 
app.use(express.json());

// create HTTP server from app
const http = require('http').createServer(app);
// pass http server to socket.io
const io = require('socket.io')(http);

// Serve static files from the "public" folder 
app.use(express.static(path.join(__dirname, 'public')));


app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
        return res.status(400).send("Error: Please provide a valid num1 using query parameter");
    } else if (isNaN(num2)) {
        return res.status(400).send("Error: Please provide a valid num2 using query parameter");
    }
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('numberPass', parseInt(Math.random() * 10));
    }, 1000);
});

// Add server listen call
// http.createServer(app).listen(3000)
http.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
