const db = require("../models");
const Setting = require("../../app/models/setting.js");
const User = require("../../app/models/user.js");
var assert = require('assert');


// For Development, id is the current user                  **** Need to Change Later 
var id = "5a9832bbb2d5280eaacf5f58"; //Audrey


module.exports = {

  findAll: function(req, res){
    db.Setting
      .find({})
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }, 

  //Find all Settings
  findById: function(req, res){
    // console.log("----------------------------------------")
    // console.log("req.params  ...... id")
    // console.log(req.params)
    // console.log(req.params.setting_id)
    // console.log("----------------------------------------")

    db.Setting
        .findOne({_id: req.params.setting_id})
        .populate("Setting")
        .then(setting => {res.json(setting)})
        .catch(err => res.status(422).json(err));
    
  },


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







};
