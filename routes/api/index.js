const router = require("express").Router();
const userRoutes = require("./users.js");
const settingsRoutes = require("./settings.js");

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// Routes
router.use("/users", userRoutes);
router.use("/settings", settingsRoutes);

module.exports = router;
