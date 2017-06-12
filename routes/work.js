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
        tech: 'Node JS, Express, Angular Js, MySQL, Bootstrap',
        duration: 'April 2016 - Present',
        role: `Designed database and created API for mobile APP`,
        images: ['assets/images/portfolio/mno_1.jpg'],
        url: 'http://www.sanantonionightout.com/'
    },
    {
        name: 'Trip Plot',
        desc: `It is an application for users to share their journey and experience which can later help other users. Users also get recommended destination of a location to go. It is also helpful for managing trip with lots of trip members
	It is a mobile application where user can signup and create profile. User can create a trip by entering trip detail eg. Trip route, points. Then he can invite friends to join with him. User can also create past trip. Google location service has been used for plotting trip points. User can find recommended destination within a radius. User can receive live notification about trip status. User can upload trip images and a video will automatically created from those images and will be uploaded to AWS`,

        tech: 'Node.Js, Express, MongoDb, AngularJS',
        duration: 'December 2015 - February 2016',
        role: `Worked on creating web services for mobile application and Implemented Socket.IO for real-time notification to mobile devices
        Used ffmpeg to generate video from images and merge video with user uploaded song`,
        images: ['assets/images/portfolio/tp_1.jpg', 'assets/images/portfolio/tp_2.jpg'],
        url: 'https://play.google.com/store/apps/details?id=com.trip.plot&hl=en'
    },
    {
        name: 'QED Game Portal',
        desc: `QED Game portal is used for manage QED game show online. It is an online quiz site. QED is a quiz show for students in Nigerian Secondary Schools to assess their intelligence and celebrate outstanding students across Nigeria. The role of the admin web portal to manage session, episode, players, question of  Quiz. Using this portal admin can create new session or episode and send push notification for mobile and other connected clients.`,

        tech: 'Web API, Angular.JS, SQL Server 2008 and SignalR',
        duration: 'Auguest 2015 - December 2015',
        role: `Consumed web services in Angularjs. Worked on Admin module to manage administrative users and public users. Designing the back-end of the application (Admin Panel). Worked on real-time notification using SignalR. We followed TDD approach in this project and maintain code coverage above 85% in AngularJs code`,
        images: ['assets/images/portfolio/cbp_1.jpg', 'assets/images/portfolio/cbp_2.jpg'],
        url: 'http://cowbellpedia.com'
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