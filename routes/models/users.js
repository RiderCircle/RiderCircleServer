var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName  :{
        type: String,
        required : true
    }
});

var Users = mongoose.model('Users', UserSchema);

module.exports = Users;