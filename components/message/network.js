const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../nertwork/response');

router.get('/', function(req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
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
            response.error(req, res, error, 400, error);
        });
});

// Verbo http para modificaciones parciales
router.patch('/:id', function(req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(error => {
            response.error(req, res, 'Error interno', 500, error);
        });
});

router.delete('/:id', function(req, res) {
    console.log(req.query);
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`)
        })
        .catch(error => {
            response.error(req, res, 'Error interno', 500, error)
        })

});

module.exports = router;