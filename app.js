var express = require('express');
var app = module.exports = express();
var path = require('path');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.locals.basedir = app.get('views');

var static = require('./assets/data/static');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
    res.render('home', { data: static })
});
app.get('/work', function(req, res) {
    res.render('work', { data: static })
});

app.get('/about', function(req, res) {
    res.render('about', { data: static })
});

app.get('/contact', function(req, res) {
    res.render('contact', { data: static })
});

app.use(function(req, res, next) {
    res.render('404', { data: static });
});


app.use(require('connect-livereload')({
    port: 6300,
    ignore: ['.js']
}));


app.listen(5000);