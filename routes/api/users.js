const router = require("express").Router();
const User = require("../../app/models/user.js");
const userController = require("../../app/controllers/userController");
// ----------------------------------------------------
router.route('/')     //users 
    .get(userController.findAllUsers)
    .post(userController.createUser);


// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/:user_id')
    .get(userController.findById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)
        

router
    .route("/email/:email") 
    // .get(userController.findByEmail);
    



module.exports = router;
