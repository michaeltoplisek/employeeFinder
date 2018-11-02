const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static('public'));


require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);