var express = require('express');
var app = express();
app.use(express.static('/media/usb/MUSICA'));
app.listen(3001);