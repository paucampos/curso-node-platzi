const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('./nertwork/response');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function(req, res) {
    response.success(req, res, "Se ha obtenido la lista correctamente", 201);
});

router.post('/message', function(req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, "Creado correctamente");
});

router.delete('/message', function(req, res) {
    console.log(req.query);
    if (req.query.error == 'ok') {
        response.error(req, res, "Erros Simulado", 400);
    } else {
        response.success(req, res, "Eliminado correctamente");
    }
});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');