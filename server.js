const express   = require('express');
const http      = require('http');
const socketIo  = require('socket.io');
const mysql     = require('mysql2');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3030;

// MySQL configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socket'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server-index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Fetch previous messages from database
    connection.query('SELECT * FROM messages', (error, results) => {
        if (error) throw error;
        socket.emit('chat history', results);
    });

    // Handle incoming messages
    socket.on('chat message', (data) => {
        const { user, message } = data;
        connection.query('INSERT INTO messages (user, message) VALUES (?, ?)', [user, message], (error, results) => {
            if (error) throw error;
            io.emit('chat message', data); // Broadcast message to all connected clients
        });
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
