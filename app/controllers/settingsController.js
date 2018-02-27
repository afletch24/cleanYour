const db = require("../models");
const Setting = require("../../app/models/setting.js");
var assert = require('assert');

module.exports = {

  // findAll: function(req, res){
  //   db.Setting
  //     .find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  //     console.log("find all from controllers/settingsController");
  // },

//Find all Settings
    findById: function(req, res){
     
      console.log(req.params.id)
     
        db.Setting
        .findById(req.params.id)
        console.log(req.params.id)
        .then(settings =>  res.json(settings) )
        .catch(err => res.status(422).json(err));
    },

  
  createSetting: function(req, res){
    db.Setting
      var setObj = new Setting();      
      setObj.phone = req.body.phone;  
      setObj.ownerID = req.body.ownerID;
      
      var promise = setObj.save();
      assert.ok(promise instanceof Promise);

      promise.then(function(data){
         
        // res.json({ message: 'User created!' });
        console.log("SUCCESS");
          
        db.User.update({ _id: setObj.ownerID }, { $push: { "Setting": data._id }})
        .then(dbModel => {
            console.log(dbModel);
            // console.log("Added project to user " + dbModel);
            res.json(dbModel)
          })
      })
      

  }
      
      











};
    // createSetting: function(req, res) {
    //   console.log("request:");
    //   console.log(req.body.phone); 
    //   console.log(req.body.ownerID); 
    //   console.log("------------------------------------------------------------------");
      
      
    //   db.Setting
    //       var setObj = new Setting();      // create a new instance of the Userr model
    //       setObj.phone = req.body.phone;  // set the users name (comes from the request)
    //       setObj.ownerID = req.body.ownerID;
    //       setObj.save(function(err){

    //           console.log("SAVED");
    //           console.log(setObj.phone);
    //           console.log(setObj.ownerID);
    //           console.log(setObj._id);

    //       })
    //     db.Setting
    //       .findByIdAndUpdate(setObj._id, {$push: { "Setting": setObj.ownerID }})
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
          
      // .then(dbModel => {
      //       console.log(dbModel);
      //       // console.log("Added project to user " + dbModel);
      //       res.json(dbModel)
      // })



    // },


    //  updateUser: function(req, res){
    //     db.User
    //     .findOneAndUpdate({ _id: req.params.user_id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));

    //     {$push: { "Setting": setObj._id }}
    // },


        //   console.log(setObj);
        //   console.log("SAVED");
        //     db.Setting
        //     // .find({_id: req.body.ownerID})
        //     .findOneAndUpdate({ _id: setObj.ownerID }, {$push: { "Setting": setObj._id }})
        //     .then(dbModel => {
        //       console.log(dbModel);
        //       // console.log("Added project to user " + dbModel);
        //       res.json(dbModel)
        //     })

        //     .catch(err => res.status(422).json(err));
            
        // })
        
        
        
        
        
        
        
        
        // .then(dbModel => {
        //   console.log("created project " + dbModel);
        //   console.log("ownerID " + req.body.ownerID);

        //   db.Setting
        //   // .find({_id: req.body.ownerID})
        //   .findOneAndUpdate({ _id: req.body.ownerID }, {$push: { "Setting": dbModel._id }})
        //   .then(dbModel => {
        //     console.log(dbModel);
        //     // console.log("Added project to user " + dbModel);
        //     res.json(dbModel)
        //   })

        //   .catch(err => res.status(422).json(err));
        //   })
    


