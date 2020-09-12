const express = require('express');
const router = express.Router();

var app = express();
app.use(router);

router.get('/message', function(req, res) {
    res.send('Mensaje Añadido');
});

app.listen(3000);
console.log('La eplicación está escuchando en http://localhost:3000');