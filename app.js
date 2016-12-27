var express = require('express');
var stormpath = require('express-stormpath');
var routes = require('./routes');
var dbConf = require('./configs/default').db;
var sessionConf = require('./configs/default').session;
var mongoose = require('mongoose');
var express_session = require('express-session');
var MongoStore = require('connect-mongo')(express_session);

var app = express();

app.set('views', './views');
app.set('view engine', 'html');

app.engine("html", require("ejs").__express);

app.use(express.static('public'));

/**
 * Middleware
 * Session
 */

app.use(express_session({
    "secret": sessionConf.secret
    , "key": sessionConf.key
    , "cookie": {"maxAge": sessionConf.timeout * 60 * 60 * 1000}
    , saveUninitialized: true
    , resave: true
    , "store": new MongoStore({
        url: dbConf.url,
        host: dbConf.host,
        port: dbConf.port,
        db: dbConf.dbname


    })
}));

routes(app);

app.use(stormpath.init(app, {
    expand: {
        debug: 'info',
        customData: true
    }
}));

app.listen(3000);

console.log("Sognare listening on port %d ", 3000);

app.on('stormpath.ready',function(){
    console.log('Stormpath Ready');
});

module.exports = app;