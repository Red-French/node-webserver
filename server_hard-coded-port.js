'use strict';

const http = require('http');

http.createServer((req, res) => {  // on every request, fire this callback function
	console.log(req.url.method, req.url);

	res.writeHead(200, {
		'Content-type': 'text/html'
	});

	// res.end('Done, dude.');
	// res.end('<!DOCTYPE html><html><body>hello, freak</body></html>');
	res.end('<html><body>hello, freaky boy!</body></html>');  // this requires 'res.writeHead' method above
															// because no DOCTYPE was entered
}).listen(3000, () => {
	console.log('Node.js server started. Listening on port 3000');
});

