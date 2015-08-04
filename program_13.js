var http = require('http');
var url = require('url');

var port = process.argv[2];

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function(req, res) {
	if (req.method !== 'GET')
		return res.end();

	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso)
	var result;
	
	if (parsedUrl.pathname.indexOf('/api/parsetime') !== -1) {
		
		result = parsetime(time);
		
	} else if (parsedUrl.pathname.indexOf('/api/unixtime') !== -1) {
		
		result = unixtime(time);
		
	}
	
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(result));
});

server.listen(+port);