var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if (err) return;
	
	var newlinesNumber = data.split('\n').length - 1;

	console.log(newlinesNumber);
});