'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;  // if I don't pass a port, then port 3000

http.createServer((req, res) => {  // on every request, fire this callback function
	console.log(req.url.method, req.url);

	res.writeHead(200, {  // status-code goes here ( https://en.wikipedia.org/wiki/List_of_HTTP_status_codes )
		'Content-type': 'text/html'
	});

	// res.end('Done, dude.');
	// res.end('<!DOCTYPE html><html><body>hello, freak</body></html>');
	res.end('<html><body>hello, freaky boy!</body></html>');  // this requires 'res.writeHead' method above
															  // because no DOCTYPE was entered
}).listen(PORT, () => {
	console.log(`Node.js server started. Listening on port ${PORT}`);
});

// In the terminal:  PORT=5000 node --harmony_destructuring server.js
// Now, in the browser, 'localhost:5000' will work or whatever server you set


