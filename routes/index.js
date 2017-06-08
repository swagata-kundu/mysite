const Router = require('express').Router();


Router.get('/', require('./home'));

Router.get('/work', require('./work'));

Router.get('/about', require('./about'));

Router.get('/contact', require('./contact'));

module.exports = Router;