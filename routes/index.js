var express = require('express'),
    router = express.Router();

// let's set up our config variable
var config = {
    title: "Temerity is cool",
    author: {
        name: 'rawr'
    },
    message: "I like cats.",
    cool: "Kim is cool.",
    pageName: "Index",
    header: "mainpage/header-main",
    css: "mainpage/css-main",
    navTemplate: "mainpage/nav-main",
    content: "mainpage/content-main",
    scripts: [
        {"src": "https://code.jquery.com/jquery-2.1.3.min.js"},
        {"src": "/javascripts/randombg.js"},
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

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', config );
});

module.exports = router;
