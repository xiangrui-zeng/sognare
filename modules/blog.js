var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var BlogSchema = new Schema({
    id        :     {type: ObjectId, index: true},
    title     :     {type: String},
    content   :     {type: Stirng},
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

mongoose.model('Blog', OrderSchema);