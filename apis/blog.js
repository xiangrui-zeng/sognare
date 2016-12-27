var blog = require('../controllers/ctl_blog');

exports.newBlog = function (req, res) {
    var jsonData = convertReqToJson(req, res);
    //TODO check
    //TODO log

    blog.newBlog(jsonData, function (err, result) {
        //TODO log
        response.send();
    })
}