const static = require('../assets/data/static');

const metaInfo = {
    title: 'Swagata Kumar Kundu-Blogs',
    description: 'Skilled in Node.js, Bootstrap, AngularJS, JavaScript, and MongoDB'
}

module.exports = (req, res, next) => {
    res.render('home', { data: static, metainfo: metaInfo }, function(err, html) {
        if (err) {
            return next(err);
        }
        return res.send(html);
    });
};