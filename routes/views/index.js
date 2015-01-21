var keystone = require('keystone'),
    Post = keystone.list('Post');

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
        {"src": "/js/lib/bootstrap/bootstrap-3.2.0.min.js"},
        {"src": "/js/lib/bootstrap/carousel.js"},
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
    ],
    posts: []
};

var limit = 3;
Post.model.find()
    .limit(3)
    .exec(function(err, posts) {
        console.log(posts[0]);

        // lazy coding 101, or I just want the stupid posts to work
        if(posts.length === 1){
            config.posts = [
                {"post": posts[0].title,
                    "slug": posts[0].slug,
                    "title": posts[0].title,
                     "date": posts[0].publishedDate,
                     "contentBrief": posts[0].content.brief,
                     "contentExtend": posts[0].content.extended,
                     "postImg": posts[0].image
                    }
            ]
        } else if(posts.length === 2){
            config.posts = [
                {"post": posts[0].title,
                    "slug": posts[0].slug,
                    "title": posts[0].title,
                     "date": posts[0].publishedDate,
                     "contentBrief": posts[0].content.brief,
                     "contentExtend": posts[0].content.extended,
                     "postImg": posts[0].image
                    },
                {"post": posts[1].title,
                    "slug": posts[1].slug,
                    "title": posts[1].title,
                     "date": posts[1].publishedDate,
                     "contentBrief": posts[1].content.brief,
                     "contentExtend": posts[1].content.extended,
                     "postImg": posts[1].image
                    }
            ]
        } else {
            config.posts = [
                {"post": posts[0].title,
                    "slug": posts[0].slug,
                    "title": posts[0].title,
                     "date": posts[0].publishedDate,
                     "contentBrief": posts[0].content.brief,
                     "contentExtend": posts[0].content.extended,
                     "postImg": posts[0].image
                    },
                {"post": posts[1].title,
                    "slug": posts[1].slug,
                    "title": posts[1].title,
                     "date": posts[1].publishedDate,
                     "contentBrief": posts[1].content.brief,
                     "contentExtend": posts[1].content.extended,
                     "postImg": posts[1].image
                    },
                {"post": posts[2].title,
                    "slug": posts[2].slug,
                    "title": posts[2].title,
                     "date": posts[2].publishedDate,
                     "contentBrief": posts[2].content.brief,
                     "contentExtend": posts[2].content.extended,
                     "postImg": posts[2].image
                    }
            ]
        }
    });

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

    // I want to get the first 3 blog posts and display those
    console.log(config.posts);

	// Render the view
	view.render('index', config);

};
