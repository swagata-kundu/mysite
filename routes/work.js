const static = require('../assets/data/static');


module.exports = (req, res, next) => {
    res.render('work', { data: static });
};