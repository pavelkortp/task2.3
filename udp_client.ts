const UDP1 = require('dgram');

const CLIENT = UDP1.createSocket('udp4');

const PORT = 2222;

const hostname = 'localhost';

CLIENT.on('message', (message: any, info: any) => {
    // get the information about server address, port, and size of packet received.

    console.log('Address: ', info.address, 'Port: ', info.port, 'Size: ', info.size);

    //read message from server

    console.log('Message from server', message.toString());
})

const packet = Buffer.from('This is a message from client');

CLIENT.send(packet, PORT, hostname, (err: Error) => {
    if (err) {
        console.error('Failed to send packet !!');
    } else {
        console.log('Packet send !!');
    }
})
