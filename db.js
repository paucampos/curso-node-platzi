const db = require('mongoose');

// Conexion a bd
db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('[db] Conectada con éxito');
};

module.exports = connect;