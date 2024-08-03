module.exports.config = {
    name: 'beshybot',
    version: '1.0.0',
    role: 0,
    description: "Automatically sends random messages in Messenger chat",
    usage: "beshybot",
    credits: 'azri',
    cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
    const messages = [
        "'uy hello kamusta kana kumain kana'",
        "'omg hi beshy'",
        "'slay queen💅🏿'",
        "'crush mo pala yun, hehe hi beshy'",
        "'beshy tulungan moko🥺'",
        "'tulungan moko rito beshy'",
        "'beshy sana makipag kant0tan ka sakin'",
        "'beshy slayable'",
        "'ATE IT SISSY💅🏿😜'",
        "'omg hi'",
        "'🖕🖕🖕'",
        "'ang boring bes'",
        "'okay hi bessy Kong soaper ang ganda😜💅🏿'",
        "'stapet b!tchy'"
    ];

    try {  
        const message = messages[Math.floor(Math.random() * messages.length)];
        api.sendMessage(message, event.threadID, event.messageID);
    } catch (error) {
        api.sendMessage("An error occurred while sending the message.", event.threadID, event.messageID);
    }
};