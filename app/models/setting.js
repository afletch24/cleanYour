const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('../models/user');


const SettingSchema = new Schema({
    
    phone: {
        type: String
    },
    
    // phone: [
    //     { 
    //         frequency: String, 
    //         time: String,
    //         date: [
    //             { 
    //                 type: Date, 
    //                 default: Date.now 
    //             }
    //         ],
    //     }
    // ],
    
    // handles: [
    //     {
    //         frequency: String,
    //         time: String,
    //         date: [
    //             { 
    //                 type: Date, 
    //                 default: Date.now 
    //             }
    //         ],
    //     }
    // ],

    // vacuum :[
    //     { 
    //         frequency: String, 
    //         time: String,
    //         date: [
    //             { 
    //                 type: Date, 
    //                 default: Date.now 
    //             }
    //         ],
    //     }
    // ],

    // remote:[
    //     { 
    //         frequency: String, 
    //         time: String,
    //         date: [
    //             { 
    //                 type: Date, 
    //                 default: Date.now 
    //             }
    //         ],
    //     }
    // ],

    // creditCard: [
    //     { 
    //         frequency: String, 
    //         time: String,
    //         date: [
    //             { 
    //                 type: Date, 
    //                 default: Date.now 
    //             }
    //         ],
    //     }
    // ],

    // purse: [
    //     { 
    //         frequency: String, 
    //         time: String,
    //         date: [
    //             { 
    //                 type: Date, 
    //                 default: Date.now 
    //             }
    //         ],
    //     }
    // ],
    
	ownerID: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

// Create the Note model using the noteSchema
const Setting = mongoose.model("Setting", SettingSchema);

// Export the Note model
module.exports = Setting;

