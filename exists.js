var fs = require('fs');
var path = require('path');

var	filepath = path.join(__dirname, 'foo.txt')

fs.exists(filepath, function(exists){
	if (exists)
		console.log('the file exists!');
	else
		console.log('the file does not exists!');
});
console.log(filepath);
