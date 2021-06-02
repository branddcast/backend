var express = require('express');
require('dotenv').config();
var app = express();

var {PORT} = process.env;

app.get('/api', function (req, res) {
    res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});