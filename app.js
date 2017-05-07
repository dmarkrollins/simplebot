const botBuilder = require('claudia-bot-builder');
const excuse = require('huh');

const bot = botBuilder(function (message) {
    const response = `Thanks for sending '${message.text}'... your message is very important to us but something happened ... ${excuse.get('en')}`;
    console.log(response);
    return response;
});

module.exports = bot;
