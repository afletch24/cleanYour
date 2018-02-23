const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
   
    res.sendFile(path.join(__dirname, "../app/views/index.html")); 
});
// // API Routes
router.use("/api", apiRoutes);

module.exports = router;