var stormpath = require('express-stormpath');
var profile = require('./apis/profile.js');
var blog = require('./apis/blog.js');

module.exports = function (app) {

    app.get('/', stormpath.getUser, function(req, res) {
        res.render('home', {
            title: 'Sognare'
        });
    });

    app.get('/home', stormpath.getUser, function(req, res) {
        res.render('home', {
            title: 'Sognare'
        });
    });

    app.get('/blog', function(req, res) {
        res.render('blog_create', {
            title: 'Sognare'
        });
    });

    app.get('/timeline', function(req, res) {
        res.render('timeline', {
            title: 'Sognare'
        });
    });

    app.get('/blog_view', function(req, res) {
        res.render('blog_view', {
            title: 'Sognare'
        });
    });

    app.get('/about', function(req, res) {
        res.render('contactus', {
            title: 'Sognare'
        });
    });


    app.post('/blog/new_blog', function (req, res) {
        blog.newBlog(req, res);
    });


    web(app);
    api(app);
}

function web(app) {

}

function api(app) {

}