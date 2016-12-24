var stormpath = require('express-stormpath');
var profile = require('./controllers/profile');

module.exports = function (app) {

    app.get('/', stormpath.getUser, function(req, res) {
        res.render('home', {
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