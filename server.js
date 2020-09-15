const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./nertwork/routes');
const config = require('./config');
const app = express();
const connectionUrl = `mongodb+srv://${config.DB_HOST}:${config.DB_PORT}@cluster0-xvqsc.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

db(connectionUrl);

// Servir archivos estáticos
app.use(config.publicRoute, express.static('public'));

app.listen(config.port, function() {
    console.log('La aplicación está escuchando en ' + config.host + ':' + config.port);
});