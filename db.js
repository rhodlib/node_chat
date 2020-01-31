const db = require("mongoose");

db.Promise = global.Promise;

const options = {
  keepAlive: 1,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

async function connect(url) {
    await db.connect(url, options)
      .then(() => console.log("[db] conection success"))
      .catch(err => console.error("[db]", err));
}

module.exports = connect;
