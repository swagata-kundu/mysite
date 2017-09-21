const Express = require('express');
const Path = require('path');
const Config = require('config');
const Compression = require('compression');


var App = Express();


App.set('view engine', 'pug');
App.set('views', __dirname + '/views');
App.locals.basedir = App.get('views');


App.use('/assets', Compression(),
    Express.static(Path.join(__dirname, 'assets')));


App.use(require('./routes'));

App.use((req, res, next) => {
    res.render('404', {
        data: static
    });
});


App.use(require('connect-livereload')({
    port: 6300,
    ignore: ['.js']
}));


App.listen(Config.get('port'), () => {
    App.emit('online');
});

// print when online
App.on('online', () => {
    console.info('Application is listening on port ', Config.get('port'));
});