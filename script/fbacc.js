module.exports.config = {
    name: 'fbacc',
    version: '1.0.0',
    role: 0,
    description: "Generates Facebook accounts",
    usage: "fbacc [amount]",
    credits: 'DOJA',
    cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require('axios');
    
    // Check if the amount argument is provided
    const amount = parseInt(args[0], 10);
    if (isNaN(amount) || amount <= 0) {
        return api.sendMessage("Please provide a valid amount of accounts to generate.", event.threadID, event.messageID);
    }

    try {
        // Fetch the accounts from the API
        const response = await axios.get(`https://autocreatefb.onrender.com/api/generateaccount?num=${amount}`);
        const accounts = response.data;  // Assuming the API returns an array of accounts

        // Format the message to display the accounts
        let formattedMessage = `🆕 Here are your generated Facebook accounts:\n\n`;
        accounts.forEach((account, index) => {
            formattedMessage += `Account ${index + 1}:\nEmail: ${account.email}\nPassword: ${account.password}\n\n`;
        });
        formattedMessage += `___________________________\nThank you, use "help" commands to see available commands!`;

        // Send the formatted message
        api.sendMessage(formattedMessage, event.threadID, event.messageID);
    } catch (error) {
        // Handle any errors
        api.sendMessage("An error occurred while processing the command.", event.threadID, event.messageID);
    }
};
