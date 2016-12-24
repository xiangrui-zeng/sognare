var express = require('express');
var stormpath = require('express-stormpath');
var routes = require('./routes');

var app = express();

app.set('views', './views');
app.set('view engine', 'html');

app.engine("html", require("ejs").__express);

app.use(express.static('public'));

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