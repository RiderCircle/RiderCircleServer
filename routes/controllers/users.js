
var User = require('../models/users');
var jwt = require('jsonwebtoken');  
var config = require('../libs/config');  



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

exports.authenticate = function(req,res){
	User.findOne({
    		email: req.body.email
	}, function(err, user) {
	    if (err) throw err;

	    if (!user) {
	      res.send({ success: false, message: 'Authentication failed. User not found.' });
	    } else {
	      // Check if password matches
	      user.comparePassword(req.body.password, function(err, isMatch) {
	        if (isMatch && !err) {
	          // Create token if the password matched and no error was thrown
	          var token = jwt.sign(user, config.secret, {
	            expiresIn: 10080 // in seconds
	          });
	          res.json({ success: true, token: 'JWT ' + token });
	        } else {
	          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
	        }
	      });
	    }
	});
};