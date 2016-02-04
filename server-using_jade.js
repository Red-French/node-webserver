// This server uses jade

'use strict';

const app = require('express')();
const bodyParser = require('body-parser'); // has to be installed with npm

// const http = require('http');
const PORT = process.env.PORT || 3000;  // if I don't pass a port, then port 3000

// JADE SETUP
app.set('view engine', 'jade'); // allows to use jade - creates an Express global variable

app.locals.title = 'The Coolest Cal App'; // an object passed to every res.render
// app.set('title', 'The Coolest Cal App');  // this sets a global variable, but you still would need to add 'title' wherever you want it

app.use(bodyParser.urlencoded({ extended: false}));  // this is middleware for the body-parser
	// the line above adds to the waterfall so it will parse the info from the file and then continue down the waterfall chain


app.get('/', (req, res) => {
	setTimeout(() => {  // could use this to load part of the site later, i.e. had to access database first or an API, for example
// getData.then(data => { });  // could also use a promise and callback rather than a timer
	res.render('index', {  // passing object to rendering engine as it passes index.jade
		// title: 'Calendar App That Will Make You Millions',  // no longer needed since using 'app.locals.title'
		date: new Date()
	});  // by default, will look for a 'views' folder containing 'index.jade'
}, 1000);
});

app.get('/contact', (req, res) => {
	if (req.query.name) {
		res.render('contact');
	}

	res.render('contact');
});

app.post('/contact', (req, res) => {
	// debugger;
	console.log(req.body);
	const name = req.body.name;
	res.send('<h1>Thanks for contacting us, ' + name + '</h1>');
});

// app.get('/hello', (req, res)) => {
// 	const naem = req.query.name || 'World';
// 	const msg = 'hello'
// }


// app.all('*', (req, res) => {  // 'all' means any verb (get, post, delete, etc will then run this)
// 	res
// 		.status(403)
// 		.send('Access Denied');
// });



app.listen(PORT, () => {
	console.log(`Node.js server started. Listening on port ${PORT}`);
});

// In the terminal:  PORT=5000 node --harmony_destructuring server.js
// Now, in the browser, 'localhost:5000' will work or whatever server you set


