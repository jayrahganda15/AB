module.exports.config = {
    name: 'guinchy',
    version: '1.0.0',
    role: 0,
    description: "Engage in conversation with guinchy",
    usage: "guinchy",
    credits: 'DOJA',
    cooldown: 3,
};

module.exports.run = async function({ api, event }) {
    const messages = [
        "omki",
        "ha",
        "sige",
        "gaga",
        "ngi",
        "loh gagø",
        "walang net",
        "omsim",
        "hi",
        "tangînamo",
        "zeno",
        "t4nga",
        "ampota",
        "sanaol",
        "oe",
        "baket",
        "anue",
        "boang ka",
        "oa",
        "iloveu",
        "huey",
        "mamamo",
        "nalulungcote akuh",
        "stapet",
        "nagsend ng bilat, kanino",
        "amp0ta"
    ];

    try {
        // Select a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Format the message using the provided template
        const formattedMessage = `🔍: What does guinchyna says?\n\n___________________\n\n${randomMessage}\n\n___________________\n\nUse 'help' commands, to see all the commands.`;
        
        // Send the formatted message
        api.sendMessage(formattedMessage, event.threadID, event.messageID);
    } catch (error) {
        // Handle any errors
        api.sendMessage("An error occurred while processing the command.", event.threadID, event.messageID);
    }
};
