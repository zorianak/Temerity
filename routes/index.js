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
    pageName: "Index"
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', config );
});

module.exports = router;
