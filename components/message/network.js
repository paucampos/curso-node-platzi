const express = require('express');
const router = express.Router();
const response = require('../../nertwork/response');

router.get('/', function(req, res) {
    response.success(req, res, "Se ha obtenido la lista correctamente", 201);
});

router.post('/', function(req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, "Creado correctamente");
});

router.delete('/', function(req, res) {
    console.log(req.query);
    if (req.query.error == 'ok') {
        response.error(req, res, "Error inesperado", 400, 'Simulación de errores');
    } else {
        response.success(req, res, "Eliminado correctamente");
    }
});

module.exports = router;