const express = require('express');
const multer = require('multer');

const router = express.Router();
const controller = require('./controller');
const response = require('../../nertwork/response');

const upload = multer({
    dest: 'public/files/',
});

router.get('/', function(req, res) {
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(error => {
            response.error(req, res, 'Undexpected error', 500, error);
        })
});

router.post('/', upload.single('file'), function(req, res) {
    console.log('file', req.file);
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch((error) => {
            response.error(req, res, 'Información inválida', 400, error);
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
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
        })
        .catch(error => {
            response.error(req, res, 'Error interno', 500, error)
        })

});

module.exports = router;