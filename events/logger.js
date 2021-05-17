const EventEmitter = require('events');

class Logger extends EventEmitter {
    data = { name: 'S M Iftakhairul', phone: '01630132436', dob: '1995-05-26', message: null };

    log (message) {
        this.data.message = message;

        // Raise an event
        this.emit('messageLogged', this.data);
    }
}

module.exports = Logger;