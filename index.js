var express = require('express');
var app = express();
var querystring = require('querystring');
var path = require('path');
var fs=require('fs');

app.use(express.static('MUSICA'));

function fromDir(startPath,filter){
	var miArr =[];
    var files = fs.readdirSync(startPath);
    for(var i = 0; i < files.length; i++){
		var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
        }
        else if (filename.indexOf(filter)>=0) {
			miArr.push(filename.slice(7));
        };		
    };
	return JSON.stringify(miArr);
};

app.get('/ruta', function (req, res) {
   var miRuta = req.url.split("?")[1]
   res.send(fromDir(miRuta,'.mp3'));
})

app.listen(3000);