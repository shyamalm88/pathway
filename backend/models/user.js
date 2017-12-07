// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var plugin = require('mongoose-createdat-updatedat');
// define the schema for our user model
var Schema = mongoose.Schema;
var User = new Schema({
    local: {
        name: String,
        email: String,
        password: String,
        image: String
    }

});

var options = {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
User.plugin(plugin, options);





// generating a hash
User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', User);