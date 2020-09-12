const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function(req, res) {
    res.send('Lista de mensajes');
});
router.post('/message', function(req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    res.send(`Mensaje Añadido `);
});
router.delete('/message', function(req, res) {
    console.log(req.query);
    console.log(req.body);
    res.send(`Mensaje "${req.body.text}" Eliminado correctamente`);
});

app.listen(3000);
console.log('La eplicación está escuchando en http://localhost:3000');