require('./config/config');
require('./services/scheduler');

const express = require('express');
const bodyParser = require('body-parser');

// const db = require('monk')(process.env.MONGODB_URL);

const flipkartRouter = require('./routes/flipkart');
const itemRouter = require('./routes/item');

var app = express();

app.use(bodyParser.json());

// app.use((req, res, next) => {
//     req.db = db;
//     next();
// });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/flipkart', flipkartRouter);
app.use('/item', itemRouter);

app.listen('3000', () => {
    console.log('Server started!');
});
