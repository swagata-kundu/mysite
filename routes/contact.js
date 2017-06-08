const static = require('../assets/data/static');


module.exports = (req, res, next) => {
    res.render('contact', { data: static });
};