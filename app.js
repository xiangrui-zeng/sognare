var express = require('express');
var stormpath = require('express-stormpath');
var dbConf = require('./configs/default').db;
var userConf = require('./configs/default').apiKey;
var sessionConf = require('./configs/default').session;
var mongoose = require('mongoose');
var express_session = require('express-session');
var MongoStore = require('connect-mongo')(express_session);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var routes = require('./routes');
var cookieSession = require('cookie-session');
// var csurf = require('csurf');


var app = express();

app.set('views', './views');
app.set('view engine', 'html');

app.engine("html", require("ejs").__express);

app.use(express.static('public'));

/**
 * Middleware
 * Session
 */

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

app.use(express_session({
    "store": new MongoStore({
        url: dbConf.url,
        host: dbConf.host,
        port: dbConf.port,
        db: dbConf.dbname
    })
    , "secret": sessionConf.secret
    , "key": sessionConf.key
    , "cookie": {"maxAge": sessionConf.timeout * 60 * 60 * 1000}
    , saveUninitialized: true
    , resave: true
}));

// app.use(cookieSession({
//     name: 'session',
//     keys: ['key1', 'key2']
// }));

// app.use(csurf({ cookie: true }))

app.use(passport.initialize());

app.use(passport.session());

//TODO error handler


app.use(stormpath.init(app, {
    expand: {
        debug: 'info',
        customData: true
    },
    apiKey: {
        id: userConf.STORMPATH_CLIENT_APIKEY_ID,
        secret: userConf.STORMPATH_CLIENT_APIKEY_SECRET
    },
    application: {
        href: userConf.STORMPATH_APPLICATION_HREF
    },
    web: {
        login: {
            enabled: true,
            nextUri: "/home"
        },
        logout: {
            enabled: true,
            uri: '/logout',
            nextUri: '/login'
        }
    }
}));

routes(app);

console.log("Please waitting . . .");
app.on('stormpath.ready',function(){
    console.log('Stormpath Ready');
    app.listen(3000);
    console.log("Sognare listening on port %d ", 3000);
});


module.exports = app;