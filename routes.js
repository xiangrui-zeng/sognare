var stormpath = require('express-stormpath');
var profile = require('./controllers/profile');

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


    web(app);
    api(app);
}

function web(app) {

}

function api(app) {

}