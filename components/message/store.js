const db = require("mongoose");
const Model = require("./model");

const url =
  "mongodb+srv://db_user_rhodlib:GFqCRe3bfRWDwmtu@cluster0-wlmw3.mongodb.net/chat";
const options = {
  keepAlive: 1,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
db.Promise = global.Promise;

db.connect(url, options)
  .then(() => console.log("[db] conection success"))
  .catch(err => console.error("[db]", err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  const messages = await Model.find();
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText
};
