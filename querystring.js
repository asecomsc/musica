var express = require('express');
var app = express();
var querystring = require('querystring');

app.use(express.static('MUSICA'));

app.get('/ruta', function (req, res) {
   res.send(req.url.split("?")[1]);
})

app.listen(3000);