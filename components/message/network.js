const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../nertwork/response');

router.get('/', function(req, res) {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(error => {
            response.error(req, res, 'Undexpected error', 500, error);
        })
});

router.post('/', function(req, res) {
    res.header({
        "custom-header": "Nuestro valor personalizado"
    });
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage);
        })
        .catch((error) => {
            response.error(req, res, error, 400);
        });
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