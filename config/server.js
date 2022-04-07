const express = require('express');
const cors = require('cors');
const routesProceso = require('../api/routes/proceso');
const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('../api/swagger.json');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.procesoPath = '/api/proceso';
        this.docsPath = '/api/docs';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.procesoPath, routesProceso);
        this.app.use(this.docsPath, swaggerUi.serve, swaggerUi.setup(swaggerDoc));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.info(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;