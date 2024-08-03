module.exports.config = {
    name: 'airi',
    version: '1.0.0',
    role: 0,
    description: "Send a random message from 'airi'",
    usage: "airi",
    credits: 'DOJA',
    cooldown: 3,
};

module.exports.run = async function({ api, event }) {
    const messages = [
        "Cge²",
        "Ano nakaisip kana",
        "Wala ngaa🙂",
        "gxg",
        "sakura school simulator",
        "What give mag pagawa ka ng coding sa ai✨✨",
        "Baka umiyak si John eme",
        "Bakit namenn",
        "Not found 🎉",
        "Bago yannn? 😱😱",
        "𝙂𝙖𝙣𝙮𝙖𝙣! 𝘿𝙖𝙥𝙖𝙩 𝙢𝙖𝙜𝙖𝙡𝙖𝙣𝙜 𝙠𝙖! 𝙖𝙣𝙜 𝙩𝙖𝙣𝙙𝙖-𝙩𝙖𝙣𝙙𝙖 𝙠𝙤 𝙣𝙖 𝙚𝙝 ! 𝙂𝙖𝙡𝙖𝙣𝙜𝙞𝙣 𝙢𝙤 𝙣𝙖𝙢𝙖𝙣 𝙖𝙠𝙤 ! 𝙗𝙞𝙧𝙮 𝙜𝙪𝙙",
        "Sa chrome na ai ka mag search ✨✨",
        "Sulusyon mang limos ng tig piso ✨✨",
        "9% nalang cge² lang toh🙂",
        "Dami nascam dine koware iphone👁👄👁",
        "Halaa👁👄👁",
        "Baliw si john🎀",
        "Hindi pa👁👄👁",
        "Sadya lang yun🥲",
        "Mag lagay ka✨✨",
        "Gravii baa😜",
        "Bat naiba yung prefix👁👄👁",
        "baliw ka💅🏻",
        "Din. 😍🤌",
        "Yezz💅🏿",
        "Pilitin mo😍",
        "Nagshashabu ka pala😍🤌",
        "Ulol kaba🖕",
        "Bleeh😝",
        "Edi wag Bleeh😝"
        ];

    try {
        // Select a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Format the message with the template
        const formattedMessage = `🎀This is what airi said🎀\n_______________________\n\n${randomMessage}\n\n_______________________\n🎀Hope you like it🎀`;

        // Send the formatted message
        api.sendMessage(formattedMessage, event.threadID, event.messageID);
    } catch (error) {
        // Handle any errors
        api.sendMessage("An error occurred while processing the command.", event.threadID, event.messageID);
    }
};