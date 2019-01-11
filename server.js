var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(8000);
app.use(express.static('public'));
console.log('server is running at port 8000');
var io = socket(server);
io.sockets.on('connection', function (socket) {
    console.log('New Connection:' + socket.id);
    socket.on('chat', chatmsg);

    function chatmsg(data) {
        io.sockets.emit('chat', data);
        console.log('emits');
    }
});
