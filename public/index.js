var socket;
var message;
var handle;
var button;
var output;
var feedback;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    background(170);
    socket = io.connect('http://localhost:8000');
    message = select('#message');
    handle = select('#handle');
    send = select('#send');
    output = select('#output');
    feedback = select('#feedback');

    send.mousePressed(sendMessage);
    socket.on('chat', msgs);
}

function sendMessage() {
    var data = {
        message: message.value(),
        handle: handle.value()

    };
    console.log(data.message);
    socket.emit('chat', data);
    //socket.on('chat', msgs);


}

function msgs(data) {
    // var msg = createP(data.handle);
    //msg.html(data.handle);
    //msg.parent('output');
    output.html("<p><strong>" + data.handle + ":</strong>" + data.message + "</p>", true);
}
