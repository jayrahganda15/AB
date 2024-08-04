module.exports.config = {
  name: "fbcover",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "Create facebook service style cover photo",
  usePrefix: true,
  commandCategory: "image",
  usages: "Create facebook service style cover photo",
  cooldowns: 0,
  dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": ""
  }
};
module.exports.run = async function({ api, args, event, permssion }) {
  const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if (!args[0]) return api.sendMessage('Please enter primary name!!!', threadID, messageID)
  else return api.sendMessage(`🔍 You have chosen the main name as: ${args.join(" ").toUpperCase()}\n\n(Reply to this message and choose your secondary name)`, event.threadID, (err, info) => {
    return global.client.handleReply.push({
      type: "tenphu",
      name: `fbcover`,
      author: senderID,
      tenchinh: args.join(" ").toUpperCase(),
      messageID: info.messageID
    });
  }, event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
