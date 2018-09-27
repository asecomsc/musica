var path = require('path');
var fs=require('fs');

function fromDir(startPath,filter){
    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
		var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
        }
        else if (filename.indexOf(filter)>=0) {
            console.log(filename);
        };		
    };
};

fromDir('i:/musica/heavy','.mp3');