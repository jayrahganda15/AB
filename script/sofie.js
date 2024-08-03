const axios = require('axios');

module.exports.config = {
    name: 'sofie',
    version: '1.0.0',
    role: 0,
    description: "Get a random quote from Sofie",
    usage: "sofie",
    credits: 'DOJA',
    cooldown: 3,
};

module.exports.run = async function({ api, event }) {
    try {
        // Fetch a random quote from the API
        const response = await axios.get('https://sofieapi.onrender.com/api/sofiesays');
        const quote = response.data.quote;

        // Format the message using the provided template
        const formattedMessage = `oh tangina ka, eto sinabi ni Sofie\n\n___________________________\n\n${quote}\n\n___________________________\n\noh putanginaka masaya kana`;

        // Send the formatted message
        api.sendMessage(formattedMessage, event.threadID, event.messageID);
    } catch (error) {
        // Handle any errors
        api.sendMessage("An error occurred while fetching the quote.", event.threadID, event.messageID);
    }
};
