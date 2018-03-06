const db = require("../models");
const User = require("../../app/models/user.js");

module.exports = {
    
    //Find all Users
    findAllUsers: function(req, res){
        db.User
        .find({})
        .then(users => {
            res.json(users)
        })
        .catch(err => res.status(422).json(err));
    },

    // Find One User by ID 
    findById: function(req, res){
        db.User
        .findOne({_id: req.params.user_id})
        .populate("Setting")
        .then(dbModel => {
            res.json(dbModel)
            console.log("we got here")
        })
        .catch(err => res.status(422).json(err)); 
    },

    //Find One User by Email 
    findByEmail: function(req, res){
        db.User
        .findOne({email: req.params.user_email})
        .then(users => {
            res.join(users);
        })
        .catch(err => res.status(422).json(err));
    },

    createUser: function(req, res){
        db.User
        var user = new User();      // create a new instance of the Userr model
        user.name = req.body.name;     // set the users name (comes from the request)
        user.email = req.body.email;  

        // save the user and check for errors
        user.save(function(err) {
            if (err){ res.send(err); }


            res.json({ message: 'User created!' });
        });
    },



    //Update a User
    updateUser: function(req, res){
        db.User
        .findOneAndUpdate({ _id: req.params.user_id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },

    //Delete the User
    deleteUser: function(req, res){
        db.User
        .findOne({_id: req.params.user_id})
        .then(dbModel => dbModel.remove())
    }
        // .delete(function(req, res) {
    //     console.log("userr deleted by id");
    //     User.remove({
    //         _id: req.params.user_id
    //     }, function(err, user) {
    //         if (err)
    //             res.send(err);

    //         res.json({ message: 'Successfully deleted' });
    //     });
    // });






//   function(req, res) {
//         console.log("put user by id");
//         // use our user model to find the user we want
//         User.findById(req.params.user_id, function(err, user) {

//             if (err)
//                 res.send(err);

//             user.name = req.body.name;  // update the users info
//             user.email = req.body.email;
//             // save the user
//             user.save(function(err) {
//                 if (err)
//                     res.send(err);

//                 res.json({ message: 'User updated!' });
//             });

//         });
//   }



};


