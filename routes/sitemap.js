var Sitemap = require('sitemap');

module.exports = (req, res, next) => {

    var map = Sitemap.createSitemap({
        hostname: 'http://iamswagata.com',
        cacheTime: 600000, // 600 sec - cache purge period 
        urls: [
            { url: '/', changefreq: 'weekly', priority: 0.7 },
            { url: '/resume', changefreq: 'monthly', priority: 0.7 },
            { url: '/about', changefreq: 'weekly', priority: 0.7 },
            { url: '/work', changefreq: 'monthly', priority: 0.7 },
            { url: '/contact', changefreq: 'monthly', priority: 0.7 },

        ]
    });

    map.toXML((err, xml) => {
        if (err) {
            return next(err);
        }
        res.header('Content-Type', 'application/xml');
        res.send(xml);
    });

}