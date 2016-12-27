var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var BlogSchema = new Schema({
    id        :     {type: ObjectId, index: true},
    main_title     :     {type: String},
    sub_title     :     {type: String},
    content   :     {type: String},
    cover_img     :     {type: String},
    createdate:     {type: Date, default: Date.now },
    updatedate:     {type: Date, default: Date.now },
    creator_info:   {
            name: {type: String},
            sex: {type: String},
            age_type: {type: String},
            tel: {type: String},
            id: {type: String},
            tips: {type: String}
    }

});

function model() {
    //TODO database connection
    return connection;
}

exports.newBlog = function (json, callback) {
    //TODO log
    var blog = model();
    blog.insert(json, function (err, result) {
        callback(err, result);
    })
}

mongoose.model('Blog', BlogSchema);