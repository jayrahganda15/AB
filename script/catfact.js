const axios = require('axios');

module.exports.config = {
    name: 'catfact',
    version: '1.0.0',
    role: 0,
    description: "Send a random cat fact",
    usage: "catfact",
    credits: 'DOJA',
    cooldown: 1,
};

module.exports.run = async function({ api, event }) {
    try {
        // Fetch a random cat fact from the API
        const response = await axios.get('https://random-api-pcoe.onrender.com/api/catfact');
        const catFact = response.data.fact;

        // Format the message with the template
        const formattedMessage = `😸 Here is your catfact!\n_________________________\n\n${catFact}\n\n_________________________\n😸meow! use "help" to view other commands`;

        // Send the formatted message
        api.sendMessage(formattedMessage, event.threadID, event.messageID);
    } catch (error) {
        // Handle any errors
        api.sendMessage("An error occurred while processing the command.", event.threadID, event.messageID);
    }
};