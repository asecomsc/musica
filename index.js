var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var fs=require('fs');
app.use(express.static('/media/usb/MUSICA'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function fromDir(startPath,filter){
	startPath = '/media/usb' + startPath;	
	var miArr =[];
	miAr2=[];
    var files = fs.readdirSync(startPath);
    for(var i = 0; i < files.length; i++){
		var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
			miAr2.push(filename.slice(10));
        }
        else if (filename.indexOf(filter)>=0) {
			miArr.push(filename.slice(17));
        };		
    };
	return JSON.stringify({files: miArr, dirs: miAr2});
};

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "DEFAULT.HTML");   
});

app.post('/ruta', function (req, res) {
   var miRuta = req.body.laRuta;
   res.send(fromDir(miRuta,'.mp3'));   
})

app.listen(3001);