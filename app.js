const express = require("express");

const app = express();

let outline = app.get("//", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

app.listen(3000);
module.exports = outline;
