//BACKEND
const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3000; 
const app = express();
const server = createServer(app);
const io = new Server(server);

const henkilokunta = require('./henkilokunta.json')
//GET ALL etsitään kaikki henkilökunta jsonista
app.get('/api/henkilokunta', (req, res) => {
    res.json(henkilokunta)
})

io.on('connection', (socket) => {
    // Kun palvelin vastaanottaa viestin se emitoi sen kaikille clienteille heti
  socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
  });
  });
    app.get('/koodi.js', (req, res) => {
    res.sendFile(join(__dirname, 'koodi.js'));
    });
    app.get('/tyyli.css', (req, res) => {
    res.sendFile(join(__dirname, 'tyyli.css'));
    });
//Tässä ei käytetä express staticia vaan lähetetään html manuaalisesti
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
    });
    server.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
      });