
var User = require('../models/users');



exports.create = function(req,res){
     var user = new User(req.body);      // create a new instance of the Bear model
         // set the bears name (comes from the request)

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });
}