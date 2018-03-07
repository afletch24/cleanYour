const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('../models/user');


const SettingSchema = new Schema({
    
    
    
    item: { 
        type: String,
    }


});

module.exports = mongoose.model("Setting", SettingSchema);

