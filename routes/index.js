var express = require('express');
var router = express.Router();


var userController = require('./controllers/users.js');
var rideController = require('./controllers/rides.js');
var passport = require('passport');  
require('./libs/passport')(passport);  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testApi', function(req, res, next) {
  res.status(200).json({ title: 'Express' });
});

router.post('/users/create',userController.create);
router.post('/rides/create',rideController.create);

router.post('/users/authenticate', userController.authenticate);


module.exports = router;
