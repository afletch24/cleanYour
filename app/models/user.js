var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
const Setting = require("./setting.js");


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
    settingsList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "settingsList"
    }]
});

module.exports = mongoose.model('User', UserSchema);