const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('../models/user');


const SettingSchema = new Schema({
    
    // _id: Schema.Types.ObjectId,
    
    item: String,

	// owner: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'User'
    // }
});

// Create the Note model using the noteSchema
const Setting = mongoose.model("Setting", SettingSchema);

// Export the Note model
module.exports = Setting;

