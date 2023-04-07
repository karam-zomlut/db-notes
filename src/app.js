require('dotenv').config();
const express = require('express');
const router = require('./router');
const compression = require('compression');

const PORT = process.env.PORT || 3000;

const app = express();
app.set('port', PORT);
app.disable('x-powered-by');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Home Route'
  })
})

app.use('/api/v1', router);


module.exports = app;