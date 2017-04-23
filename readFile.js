var fs = require('fs');
var path = require('path');

var	filepath = path.join(__dirname, 'foo.txt') 

fs.readFile(filepath, function(err, content){
	if(err){
		console.log('Fail to read');
		return;
	}
	console.log(content);
});