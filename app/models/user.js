var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: {
        type: String,
        require: true
    },
     email: {
        type: String,
        require: true,
        
        // match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    Settings: [{
        type: Schema.Types.ObjectId,
        ref: "Setting"
    }]
});

module.exports = mongoose.model('User', UserSchema);