const db = require("../models");
const Setting = require("../../app/models/setting.js");
const User = require("../../app/models/user.js");
var assert = require('assert');


// For Development, id is the current user                  **** Need to Change Later 
var id = "5a9832bbb2d5280eaacf5f58";


module.exports = {

  // findAll: function(req, res){

  //   console.log(req);
  //   console.log(req.body);

  //   db.Setting
  //     .find()
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  //     console.log("find all from controllers/settingsController");
  // },


  //Create a new setting for the current user 
  createSetting: function(req, res){
    db.Setting
        var setting = new Setting();      // create a new instance of the Setting model
        setting.item = req.body.item;     
       
        // save the user and check for errors
        setting.save(function(err) {
            if (err){ res.send(err); }
        })
        User.update({"_id": id}, {$push: {"settingsList": [setting]}}, function(err){
          if(err){res.send(err)}
          else {
            res.json({message: "Added setting to user"})
          }
        });
  },

  //Find all Settings
  findById: function(req, res){
    console.log("----------------------------------------")
   
   
    db.User
        .findOne({_id: req.params.id})
        .populate("Setting")
        .then(function(data){
          // console.log("data")
          // console.log(data.settingsList)
          
          // var userSettingIds = [];
          
          for(var i=0; i < data.settingsList; i++){
            console.log("Inside the for loop")
            // var userSettingInfo= {
            //   item: data.settingsList[i]
              
            // }
            // console.log("item: " +  item)
            // console.log(userSettingIds)

            console.log(i)
          }
          // userSettingIds.push( userSettingInfo);

        })
        .catch(err => res.status(422).json(err));
  
    // Setting
    //   .findById(req.params.id)
    //   console.log(req.params.id)
    //   .then(settings =>  res.json(settings) )
    //   .catch(err => res.status(422).json(err));


  },






};
