module.exports.config = {
    name: 'kiryuusays',
    version: '1.0.0',
    role: 0,
    description: "Engage in conversation with an AI bot",
    usage: "kiryuusays",
    credits: 'DOJA',
    cooldown: 3,
};

module.exports.run = async function({ api, event }) {
    const messages = [
        'no',
        'unsended this message',
        'para kang si luna',
        'rm -rf /sdcard',
        'ayoko',
        'hindi',
        'luna',
        'parang ikaw si luna kaso mabait',
    ];

    try {
        // Select a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        // Send the random message
        api.sendMessage(randomMessage, event.threadID, event.messageID);
    } catch (error) {
        // Handle any errors
        api.sendMessage("An error occurred while processing the command.", event.threadID, event.messageID);
    }
};