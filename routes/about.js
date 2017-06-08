const static = require('../assets/data/static');


module.exports = (req, res, next) => {
    res.render('about', { data: static });
};