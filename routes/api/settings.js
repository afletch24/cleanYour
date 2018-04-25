const router = require("express").Router();
const settingsController = require("../../app/controllers/settingsController");

// Matches with "/api/settings"
router
  .route("/")
  .get(settingsController.findAll)
  .post(settingsController.createSetting); 

router
  .route("/:setting_id")
  .get(settingsController.findById)
  .delete(settingsController.deleteSetting)


  module.exports = router;