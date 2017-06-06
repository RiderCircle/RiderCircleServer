var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

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
    },
    email : {
        type : String,
        required : true,
        unique: true,
    },
    password : {
        type : String,
        required: true
    }
});
UserSchema.pre('save', function (next) {  
  var user = this;
  console.log('coming here');
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(pw, cb) {  
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

var Users = mongoose.model('Users', UserSchema);




module.exports = Users;