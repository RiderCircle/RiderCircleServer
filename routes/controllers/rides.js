
var Ride = require('../models/rides');



exports.create = function(req,res){
     var ride = new Ride(req.body);      // create a new instance of the Bear model
         // set the bears name (comes from the request)

        // save the bear and check for errors
        ride.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Ride created!' });
        });
}
exports.get = function(callback,limit){
    ride.find(callback).limit(limit);
    res.json(ride);
}