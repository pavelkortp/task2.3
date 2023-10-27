"use strict";
const UDP = require('dgram');
const SERVER = UDP.createSocket('udp4');
const port = 2222;
SERVER.on('listening', () => {
    // Server address it’s using to listen
    const address = SERVER.address();
    console.log('Listining to ', 'Address: ', address.address, 'Port: ', address.port);
});
SERVER.on('message', (message, info) => {
    console.log('Message', message.toString());
    const response = Buffer.from('Message Received');
    //sending back response to client
    SERVER.send(response, info.port, info.address, (err) => {
        if (err) {
            console.error('Failed to send response !!');
        }
        else {
            console.log('Response send Successfully');
        }
    });
});
SERVER.bind(port);
