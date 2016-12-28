/**
 * Controller of Blog
 * Create , Edit , Delete Operator
 */

"use strict";

var Blog = require('../modules/mod_blog');

exports.newBlog = function (jsonData, callback) {
    //TODO: log

    //TODO: Auth Check and logic check

     var newBlog = new Blog(jsonData);

     // console.log(newBlog);
    newBlog.save(function (err, result) {
        if (err) {
            //TODO log
            // throw  err;
            console.log("Create Error");
        }
        callback(err, result);
    });
};