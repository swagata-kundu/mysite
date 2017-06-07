var express = require('express');
var app = module.exports = express();
var path = require('path');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.locals.basedir = app.get('views');


app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
    res.render('home', { title: 'Hey', message: 'Hello there!' })
});
app.get('/work', function(req, res) {
    res.render('work', { title: 'Hey', message: 'Hello there!' })
});

app.get('/about', function(req, res) {
    res.render('about', { title: 'Hey', message: 'Hello there!' })
});

app.get('/contact', function(req, res) {
    res.render('contact', { title: 'Hey', message: 'Hello there!' })
});

app.use(function(req, res, next) {
    res.render('404', { status: 404, url: req.url });
});


app.use(require('connect-livereload')({
    port: 6300,
    ignore: ['.js']
}));


app.listen(5000);