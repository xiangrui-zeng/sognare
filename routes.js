var stormpath = require('express-stormpath');
var profile = require('./apis/profile.js');
var blog = require('./apis/blog.js');

module.exports = function (app) {

    var data = {
        'title' : 'Sognare'
    };

    app.get('/', stormpath.getUser, function(req, res) {
        data.user = req.user == undefined ? "" : req.user;
        res.render('home', data);
    });

    app.get('/home', stormpath.getUser, function(req, res) {
        data.user = req.user == undefined ? "" : req.user;
        res.render('home', data);
    });

    app.get('/blog', stormpath.getUser, function(req, res) {
        data.user = req.user == undefined ? "" : req.user;
        res.render('blog_create', data);
    });

    app.get('/timeline', stormpath.getUser, function(req, res) {
        data.user = req.user == undefined ? "" : req.user;
        res.render('timeline', data);
    });

    app.get('/blog_view', stormpath.getUser, function(req, res) {
        data.user = req.user == undefined ? "" : req.user;
        res.render('blog_view', data);
    });

    app.get('/about', stormpath.getUser, function(req, res) {
        data.user = req.user == undefined ? "" : req.user;
        res.render('contactus', data);
    });


    app.post('/blog/new_blog', stormpath.loginRequired, function (req, res) {
        blog.newBlog(req, res);
    });


    web(app);
    api(app);
};

function web(app) {

};

function api(app) {

};