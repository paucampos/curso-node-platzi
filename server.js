const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./nertwork/routes');
const { DB_HOST, DB_PORT, DB_NAME } = require('./config');
const connectionUrl = `mongodb+srv://${DB_HOST}:${DB_PORT}@cluster0-xvqsc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

db(connectionUrl);

// Servir archivos estáticos
app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');