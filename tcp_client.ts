var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server!!!');
});

client.on('data', function(data:string) {
	console.log('Received: ' + data);
	// client.destroy(); // kill client after server's response
});

// client.on('close', function() {
// 	console.log('Connection closed');
// });