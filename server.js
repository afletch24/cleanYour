var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
const routes = require("./routes");


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


var router = express.Router();             


app.use(routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cleanYour",
);




// more routes for our API will happen here








