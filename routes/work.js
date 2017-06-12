const static = require('../assets/data/static');

const metaInfo = {
    title: 'Swagata Kumar Kundu-Work Experience',
    description: 'Skilled in Node.js, Bootstrap, AngularJS, JavaScript, and MongoDB'
}

const work = [{
        name: 'Night Out',
        desc: `My Night out is a business concept for various cities. 
        Here business owner register their business and public user can find them as useful. 
        This business are mainly of Restaurant, Hotel, Bar types.
         Business owners have facility to promote their business and organize various events at their place by letting know the customer via this media. This project has mobile application development and as well as website. There are multiple level of business in this model. Site owner make lease of various city website to local licensee. Later licensee sales spot on the site to business owners. 
        There are various notification scenarios via mail as well as push notification at realtime like reservation reminder, new event reminder, business expiry reminder etc to make the users always updated.`,
        tech: 'Node JS, Angular Js, MySQL, Bootstrap',
        duration: 'April 2016 - Present',
        role: `Designed database and created API for mobile APP`,
        images: ['assets/images/portfolio/2.jpg', 'assets/images/portfolio/2.jpg'],
        url: 'http://www.sanantonionightout.com/'
    },
    {
        name: 'Night Out 2',
        desc: `My Night out is a business concept for various cities. 
        Here business owner register their business and public user can find them as useful. 
        This business are mainly of Restaurant, Hotel, Bar types.
         Business owners have facility to promote their business and organize various events at their place by letting know the customer via this media. This project has mobile application development and as well as website. There are multiple level of business in this model. Site owner make lease of various city website to local licensee. Later licensee sales spot on the site to business owners. 
        There are various notification scenarios via mail as well as push notification at realtime like reservation reminder, new event reminder, business expiry reminder etc to make the users always updated.`,
        tech: 'Node JS, Angular Js, MySQL, Bootstrap',
        duration: 'April 2016 - Prasent',
        role: `Designed database and created API for mobile APP`,
        images: ['assets/images/portfolio/2.jpg']
    }

]

module.exports = (req, res, next) => {
    res
        .render('work', {
            data: static,
            metainfo: metaInfo,
            work: work
        }, (err, html) => {
            if (err) {
                return next(err);
            }
            return res.send(html);
        });
};