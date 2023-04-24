const Server = require('./models/server');
require('dotenv').config();

const server = new Server();

server.execute();


// io.on('connection', ( socket ) => {
//     // //console.log( socket.id );
//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Welcome mmg',
//     //     fecha: new Date()
//     // });

//     //Escuchar evento
//     socket.on('mensaje-to-server', ( data ) => {
//         console.log( data );

//         //Esta linea progaga el mensaje solo al cliente que emitio el mensaje
//         //socket.emit('mensaje-from-server', data );

//         //Esta linea propaga el mensaje a todos lo clientes que estén conetados
//         //al servidor
//         io.emit('mensaje-from-server', data );
//     })

//  });

