const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action:'deny'}));

app.use(express.static("public"));
app.disable("strict-transport-security");
const api = require("./server.js");
app.use("/_api", api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.listen((process.env.PORT || 3000), () => {
  console.log(`Your app is listening on port ${process.env.PORT || 3000}`);
});

module.exports = app;













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen((process.env.PORT || 3000), () => {
  console.log(`Your app is listening on port ${process.env.PORT || 3000}`);
});
