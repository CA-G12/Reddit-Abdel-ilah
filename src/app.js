const { join } = require('path');
const express = require('express');
const router = require('./router');
const compression = require('compression');

const app = express();
app.set('PORT', process.env.PORT || 3000)

app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router)
module.exports = app