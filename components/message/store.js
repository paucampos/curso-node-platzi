const db = require('mongoose');
const Model = require('./model');

const { DB_HOST, DB_PORT, DB_NAME } = require('../../config');

// Conexion a bd
const connectionUrl = `mongodb+srv://${DB_HOST}:${DB_PORT}@cluster0-xvqsc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
db.Promise = global.Promise;
db.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db] Conectada con éxito');


function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage() {
    const messages = await Model.find();
    return messages;
}

async function updateMessage(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    edit: updateMessage
        // get
        // delete
}