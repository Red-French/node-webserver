// This server uses jade

'use strict';

const express = require('express'); // express() creates an Express application
const app = express();

const imgur = require('imgur');
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser'); // has to be installed with npm; body-parser populates
										   // req.body with (among other things) the value of the
										   // POST parameters.  bodyParser is a part of "Connect",
										   // a set of middlewares for node.js.
// const upload = require('multer')({ dest: 'tmp/uploads'});  // Express for file uploading
	// the line above uploads the file to the destination you determine
	// here, the file is uploaded to tmp/uploads; if the directoy does not exist, it is created at time of upload

// const http = require('http');
const PORT = process.env.PORT || 3000;  // if I don't pass a port, then port 3000


const multer  = require('multer')
let storage = multer.diskStorage({
  destination: 'tmp/uploads',  // location of local image storage

  filename: function (req, file, cb) {
  	cb(null, Date.now() + file.originalname)
  	console.log('file', file);
    // let date = new Date();  // get current date/time
    // date = date.toString();  // turn date/time into string
    // console.log('date string', date);
    // cb(null, req.body.name)  // save image with user-defined name
    // cb(null, date)  // save image with current date/time
  }
})

const upload = multer({ storage: storage })




// JADE SETUP
app.set('view engine', 'jade'); // allows to use jade - creates an Express global variable

app.locals.title = 'The Coolest Cal App'; // an object passed to every res.render
// app.set('title', 'The Coolest Cal App');  // this sets a global variable, but you still would need to add 'title' wherever you want it

// app.use(bodyParser.urlencoded({ extended: false}));  // this is middleware for the body-parser
	// the line above adds to the waterfall so it will parse the info from the file and then continue down the waterfall chain

// this is a middleware function for sass
// app.use(require('node-sass-middleware')({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true,
//   sourceMap: true
// }));

app.use(express.static(path.join(__dirname, 'public')));  // sets up routes for your app (array of routes
														  //of all files in the public file)
														  // express.static is the only built-in middleware
														  // in Express. It is based on serve-static, and
														  // is responsible for serving the static assets
														  // of an Express application.
app.set('views', path.join(__dirname, 'views'));  // gives a path to anything in views that doesn't already
												  // have a path

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

app.get('/sendphoto', (req, res) => {
	res.render('sendphoto');
});

app.post('/sendphoto', upload.single('image'), (req, res) => {
	// A single image
	console.log('req.file ----->', req.file);
	// imgur.uploadFile(req.file.path)
	//     .then(function (json) {
	//         console.log(json);
	//         console.log(json.data.link);
	//         	fs.unlink(req.file.path, (err) => {
	// 		    	if (err) throw err;
	// 		    	console.log('successfully deleted /tmp/uploads');
	// 		  });
	//     })
	//     .catch(function (err) {
	//         console.error(err.message);
	//     });


	console.log(req.body.name, req.file.originalname);  // log details of uploaded image
	res.send('<h1>Thanks for sending the photo!</h1>');
});



// app.get('/hello', (req, res)) => {
// 	const naem = req.query.name || 'World';
// 	const msg = 'hello'
// }

app.all('*', (req, res) => {  // 'all' means any verb (get, post, delete, etc will then run this)
	res
		.status(403)
		.send('Access Denied');
});



app.listen(PORT, () => {
	console.log(`Node.js server started. Listening on port ${PORT}`);
});

// In the terminal:  PORT=5000 node --harmony_destructuring server.js
// Now, in the browser, 'localhost:5000' will work or whatever server you set
