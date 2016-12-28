var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
mongoose.Promise = require('bluebird');

var BlogSchema = new Schema({
    id        :     {type: ObjectId, index: true},
    title     :     {type: String},
    discription     :     {type: String},
    content   :     {type: String},
    cover_img     :     {type: String},
    createdate:     {type: Date, default: Date.now },
    updatedate:     {type: Date, default: Date.now },
    creator_info:   {
            name: {type: String},
            sex: {type: String},
            age: {type: String},
            tel: {type: String},
            id: {type: Number},
            tips: {type: String}
    }

});

mongoose.connect('mongodb://localhost/sognare');

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;

