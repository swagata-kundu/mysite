const Router = require('express').Router();
const Path = require('path');

Router.get('/', require('./home'));

Router.get('/work', require('./work'));

Router.get('/about', require('./about'));

Router.get('/contact', require('./contact'));

Router.get('/resume', require('./resume'));


Router.get('/robots.txt', (req, res, next) => {
    res.sendFile(Path.join(__dirname, '../assets/data/robots.txt'));
});

module.exports = Router;