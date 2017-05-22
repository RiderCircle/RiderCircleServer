var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RidesSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    rideStartDate: {
        type: Date,
        required: true,
    },
    rideEndDate: {
        type: Date,
        required: true,
    },
    itenerary  :{
        type: Array
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

var Rides = mongoose.model('Rides', RidesSchema);

module.exports = Rides;