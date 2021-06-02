var express = require('express');
const config = require('./config.js');
var app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);
var {PORT} = config;

app.get('/api', function (req, res) {
    res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});