const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController]: Falta user o message');
            return reject('Información inválida');
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        store.add(fullMessage);
        return resolve(fullMessage)
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}
module.exports = { addMessage, getMessages }