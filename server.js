// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const path = require('path')
const router = require('./routes.js');
const db = require('./db');

// Express Server Instance
const app = express();

// Middleware
app.use(parser.json());
app.use(express.static(path.resolve(__dirname, './public')));
app.use('/api', router);

// Tell server where to listen & add log for terminal
app.listen(3000, () => console.log('listening in port 3000'));

// Initial Route test
//  app.get('/', (req, res) => {
//   res.send('server connected');
// })
