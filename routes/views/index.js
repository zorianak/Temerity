var keystone = require('keystone');

var config = {
    title: "Temerity is cool",
    author: {
        name: 'rawr'
    },
    message: "I like cats.",
    cool: "Kim is cool.",
    pageName: "Index",
    adminNav: "../layouts/default/admin-nav.dust",
    header: "../layouts/mainpage/header-main",
    navTemplate: "../layouts/mainpage/nav-main",
    content: "../layouts/mainpage/content-main",
    footer: "../layouts/mainpage/footer-main",
    css: "../layouts/mainpage/css-main",
    scripts: [
        {"src": "https://code.jquery.com/jquery-2.1.3.min.js"},
        {"src": "/javascripts/randombg.js"},
        {"src": "/javascripts/latest-tweet.js"},
        {"src": "/javascripts/init-main.js"}
    ],
    navItems: [
        {"name": "Home", "src": "/"},
        {"name": "News", "src": "/news"},
        {"name": "Forum", "src": "/forum"},
        {"name": "The Guild", "src": "/guild"},
        {"name": "Media", "src": "/media"},
        {"name": "Recruitment", "src": "/recruitment"},
        {"name": "Sales", "src": "/sales"}
    ]
};

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Render the view
	view.render('index', config);

};
