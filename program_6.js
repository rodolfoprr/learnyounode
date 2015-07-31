var mymodule = require('./program_6_module');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list) {
	if (err) return console.error('Erro:', err);
	
	list.forEach(function(item) {
		console.log(item);
	});
});

