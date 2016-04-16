'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/routes');  // Always looks for an 'index' file unless you specify
                                            // Could have renamed 'routes.js' 'index.js' and made
                                            // this path './routes/'
const PORT = process.env.PORT || 3000;  // dynamic port or port 3000

const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || 'reds-node-webserver';

const MONGODB_AUTH = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`  // TERNARY OPERATOR (? :)
  : '';

const MONGODB_URL = `mongodb://${MONGODB_AUTH}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
// protocol://user:pass@host:port/path (this is now common protocol)

app.set('view engine', 'jade');

app.locals.title = 'THE Super Cool App';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

mongoose.connect(MONGODB_URL);

mongoose.connection.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
});
