
var Rides = require('../models/rides');



exports.create = function(req,res){
     var user = new Rides(req.body);      // create a new instance of the Bear model
         // set the bears name (comes from the request)

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Ride created!' });
        });
}