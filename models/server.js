//Servidor de Express
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');

const Sockets  = require('./sockets');

class Server {

    constructor() {

        this.app    = express();
        this.port   = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );

        //Configuracions de Sockets
        this.io     = socketio( this.server, { /* configuraciones */} );

    }

     middlewares() {
        
        //Desplegar el directorio pùblico
        this.app.use( express.static( path.resolve( __dirname, '../public'  )));

        //CORS
        this.app.use( cors() );
    }

    configurarSockets() {
        new Sockets( this.io );
    }

    execute() {

        //Inicializar middlewares
        this.middlewares();

        //Inicializar Sockets
        this.configurarSockets();

        //Inicializar server
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port );
        });
    }
}

module.exports = Server;