/**
 * Controller of Blog
 * Create , Edit , Delete Operator
 */

"use strict";

var Blog = require('../modules/mod_blog.js');

exports.newBlog = function (jsonData, callback) {
    //TODO: log

    //TODO: Auth Check and logic check

    var newBlog = new Blog(jsonData);

    newBlog.save(callback);
};