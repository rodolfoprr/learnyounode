var http = require('http');

var urls = [ process.argv[2], process.argv[3], process.argv[4] ];

var allData = '';
var count = 0;

getUrl(urls[0]);

function getUrl(url) {
	
	http.get(url, function(response) {
	
		var allData = '';
		
		response.setEncoding('utf8');
		
		response.on('error', console.error);
		
		response.on('data', function(data) {
				allData += data;
		});
		
		response.on('end', function() {
			console.log(allData);
			count++;
			
			if(count < 3) 
				getUrl(urls[count]);
		});
		
	});
	
}