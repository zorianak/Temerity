var keystone = require('keystone'),
	async = require('async');

var config = {
    title: "Temerity is cool",
    author: {
        name: 'rawr'
    },
    message: "I like cats.",
    cool: "Kim is cool.",
    pageName: "Blog",
    adminNav: "../layouts/default/admin-nav.dust",
    header: "../layouts/default/header-default",
    navTemplate: "../layouts/mainpage/nav-main",
    content: "../layouts/mainpage/footer-main",
    footer: "../layouts/mainpage/footer-main",
    css: "../layouts/default/css-default",
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

	// Init locals
	locals.section = 'blog';
	locals.filters = {
		category: req.params.category
	};
	locals.data = {
		posts: [],
		categories: []
	};

	// Load all categories
	view.on('init', function(next) {

		keystone.list('PostCategory').model.find().sort('name').exec(function(err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.categories = results;

			// Load the counts for each category
			async.each(locals.data.categories, function(category, next) {

				keystone.list('Post').model.count().where('category').in([category.id]).exec(function(err, count)                   {
					category.postCount = count;
					next(err);
				});

			}, function(err) {
				next(err);
			});

		});

	});

	// Load the current category filter
	view.on('init', function(next) {

		if (req.params.category) {
			keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function(err, result) {
				locals.data.category = result;
				next(err);
			});
		} else {
			next();
		}

	});

	// Load the posts
	view.on('init', function(next) {

		var q = keystone.list('Post').paginate({
				page: req.query.page || 1,
				perPage: 10,
				maxPages: 10
			})
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author categories');

		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}

		q.exec(function(err, results) {
			locals.data.posts = results;
			next(err);
		});

	});

	// Render the view
	view.render('blog', config);

};
