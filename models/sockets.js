class Sockets {

    constructor( io ) {

        this.io = io;
        this.socketEvents();
    }

    socketEvents() {

        //On Connection
        this.io.on('connection', ( socket ) => {

        //Escuchar evento: mensaje-to-server
        socket.on('mensaje-to-server', ( data ) => {
            console.log( data );

            //Esta linea progaga el mensaje solo al cliente que emitio el mensaje
            //socket.emit('mensaje-from-server', data );

            //Esta linea propaga el mensaje a todos lo clientes que estén conetados
            //al servidor
            this.io.emit('mensaje-from-server', data );
    });

 });


    }

}

module.exports = Sockets;