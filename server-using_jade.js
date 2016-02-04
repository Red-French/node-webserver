// This server uses jade

'use strict';

const app = require('express')();
// const http = require('http');
const PORT = process.env.PORT || 3000;  // if I don't pass a port, then port 3000

// JADE SETUP
app.set('view engine', 'jade'); // allows to use jade
app.get('/', (req, res) => {
	setTimeout(() => {  // could use this to load part of the site later, i.e. had to access database first or an API, for example
// getData.then(data => { });  // could also use a promise and callback rather than a timer
	res.render('index', {  // passing object to rendering engine as it passes index.jade
		title: 'Calendar App That Will Make You Millions',
		date: new Date()
	});  // by default, will look for a 'views' folder containing 'index.jade'
}, 1000);
});

// EXPRESS SYNTAX
// app.get('/hello', (req, res) => {
// 		res.write('<h1>Hello World</h1>');  // vanilla node

// 		// query parameter handling
// 		// http://localhost:3000/hello/?name=Bob
// 		const name = req.query.name;
// 		const msg = `<h1>Hello ${name}</h1>`;  // NOTE use of alt quotes
// 		console.log('QUERY PARAMS>>>>>', req.query);


// 		msg.split('').forEach((char, i) => { // creates an array of characters
// 		setTimeout (() => {
// 			res.write(char)  // will now write characters slowly
// 		}, 500 * i);  // '* i' extends the time for each subsequent character
// 		});  

// 		setTimeout (() => {  // timer for when pageload will end
// 			res.end();		 // otherwise, the load will continue to spin
// 		}, 20000);
// });

// app.get('/random', (req, res) => {
// 	res.send(Math.random().toString());
//   // res.send('Hello World!');
// });

// app.get('/random/:min/:max', (req, res) => {
// 	const min = req.params.min;
// 	const max = req.params.max;
// });

app.all('*', (req, res) => {  // 'all' means any verb (get, post, delete, etc will then run this)
	// res.writeHead(403);
	res
		.status(403)
		.send('Access Denied');
	// res.end('Access Denied');
  // res.send('Hello World!');
});



app.listen(PORT, () => {
	console.log(`Node.js server started. Listening on port ${PORT}`);
});

// In the terminal:  PORT=5000 node --harmony_destructuring server.js
// Now, in the browser, 'localhost:5000' will work or whatever server you set


