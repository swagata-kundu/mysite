const static = require('../assets/data/static');

const metaInfo = {
    title: 'Swagata Kumar Kundu-Contact',
    description: 'Skilled in Node.js, Bootstrap, AngularJS, JavaScript, and MongoDB'
}

module.exports = (req, res, next) => {
    res.render('contact', { data: static, metainfo: metaInfo }, function(err, html) {
        if (err) {
            return next(err);
        }
        return res.send(html);
    });
};