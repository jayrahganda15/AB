module.exports.config = {
    name: 'motivqoutes',
    version: '1.0.0',
    role: 0,
    description: "Fetches a motivational quote",
    usage: "motivqoutes",
    credits: 'DOJA',
    cooldown: 3,
};

module.exports.run = async function({ api, event }) {
    const axios = require('axios');
    
    try {
        // Fetch the quote from the API
        const response = await axios.get('https://randomqouteapi.onrender.com/qoutegenerate');
        const quote = response.data.quote;  // Assuming the API returns the quote in a 'quote' field

        // Format the message using the provided template
        const formattedMessage = `❤️ here is your motivqoute\n\n___________________________\n\n${quote}\n\n___________________________\n\nthank u, use "help" commands to see available command, keep fighting!`;
        
        // Send the formatted message
        api.sendMessage(formattedMessage, event.threadID, event.messageID);
    } catch (error) {
        // Handle any errors
        api.sendMessage("An error occurred while processing the command.", event.threadID, event.messageID);
    }
};
