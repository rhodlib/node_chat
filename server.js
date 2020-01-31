const express = require("express");
const db = require('./db');
const url =
  "mongodb+srv://db_user_rhodlib:GFqCRe3bfRWDwmtu@cluster0-wlmw3.mongodb.net/chat";

const router = require("./network/routes");

db(url);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));
app.listen(5000);
console.log("App listening on port http://localhost:5000");
