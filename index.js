var express = require('express');
var app = express();
app.use(express.static('MUSICA'));
app.listen(3000);
