const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const https = require("https");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
  
    switch (currentDay) {
        case 0:
         day = "Sunday";
          break;
        case 1:
            day = "Monday";
          break;
        case 2:
            day = "Tuesday";
          break;
        case 3:
            day = "Wednesday";
          break;
        case 4:
            day = "Thursday";
          break;
        case 5:
            day = "Friday";
          break;
        case 6:
            day = "Saturday";
          break;
          default:
    console.log("Invalid day");
      }
      res.render("list" , {day : day})
});


app.listen(3000, function() {
    console.log("Server is running on port 3000");
});