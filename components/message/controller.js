const store = require('./store');

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[messageController]: Falta chat usuario o message');
            return reject('Información inválida');
        }

        let fileUrl = '';
        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl
        }
        store.add(fullMessage);
        return resolve(fullMessage)
    });
}

async function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
        }

        const result = await store.edit(id, message);
        resolve(result);
    });
}

function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid data');
        }
        resolve(store.delete(id))
            .then(() => {
                resolve();
            })
            .catch(error => {
                reject(error);
            })
    });
}

module.exports = { addMessage, getMessages, updateMessage, deleteMessage }