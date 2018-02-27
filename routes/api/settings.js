const router = require("express").Router();
const settingsController = require("../../app/controllers/settingsController");

// Matches with "/api/settings"
router
  .route("/")
 
  .post(settingsController.createSetting); 

router
  .route("/:id")
  .get(settingsController.findById)


  module.exports = router;