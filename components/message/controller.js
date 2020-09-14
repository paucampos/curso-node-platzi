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

async function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            // return false;
        }

        const result = await store.edit(id, message);
        resolve(result);
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}
module.exports = { addMessage, getMessages, updateMessage }