'use strict'
import * as status from './logger/status.js';
import express from 'express';

const app = express();
const port = process.env.port || 1337;

app.get('/', (req, res) => {
    status.serverHasResponse(res.url);
    res.send('Hola Calcanime');
});

app.listen(port, () => {
    status.serverAsStart(port);
});

status.serverAsClose();