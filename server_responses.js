'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;  // if I don't pass a port, then port 3000

http.createServer((req, res) => {  // on every request, fire this callback function
	console.log(req.url.method, req.url);

	if (req.url === '/hello') {
		res.write('<h1>Hello World</h1>');  // vanilla node

		const msg = '<h1>Hello There, Freaky Boy!!</h1>';
		msg.split('').forEach((char, i) => { // creates an array of characters
		setTimeout (() => {
			res.write(char)  // will now write characters slowly
		}, 500 * i);  // '* i' extends the time for each subsequent character
		});  

		setTimeout (() => {  // timer for when pageload will end
			res.end();		 // otherwise, the load will continue to spin
		}, 20000);

		// setTimeout(() => {  // TIMER
			// res.end('<h1>Goodbye</h1>');
		// }, 5000);  // five seconds before response
		// }

		// res.end('<h1>Goodbye World</h1>');  // express syntax -- immediately prints

		} else if (req.url === '/random') {
			res.end(Math.random().goString());
		} else {
			res.writeHead(403);
			res.end('Access Denied');
		}
	// res.writeHead(200, {  // status-code goes here ( https://en.wikipedia.org/wiki/List_of_HTTP_status_codes )
		// 'Content-type': 'text/html'
	// } else {
		// res.end('Access Denied!');
	// }
}).listen(PORT, () => {
	console.log(`Node.js server started. Listening on port ${PORT}`);
});

// In the terminal:  PORT=5000 node --harmony_destructuring server.js
// Now, in the browser, 'localhost:5000' will work or whatever server you set


