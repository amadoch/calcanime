'use strict'
import wPath from 'node:path/win32'
import { fileURLToPath } from 'node:url';
import * as status from './dev/logger/status.js';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = wPath.dirname(__filename);

const port = process.env.port || 1337;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
    status.serverHasResponse(res.url);
});

//Redirección a las paginas estáticas
app.use('/static', express.static(__dirname + '/public/static'));

//Fin del enrutamiento.
app.use((req, res) => {
    res.send('<h1>Lo sentimos, no hemos podido encontrar la página.</h1>');
});

app.listen(port, () => {
    status.serverAsStart(port);
});
