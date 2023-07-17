const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const https = require("https");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Move the declaration of `day` to a higher scope

var items = ["Buy food","Cook food","Eat food"];
app.get("/", function(req, res) {
    var today = new Date();
    var option = {
      weekday : "long" ,
      day : "numeric" , 
      month : "long" ,
      year : "numeric"
    };
    var day = today.toLocaleDateString("ar-sa",option);
  
    res.render("list", { day: day ,addNewListItem:items});
});

app.post("/", function(request, response) {
    var item = request.body.add;
    items.push(item);
    response.redirect("/");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
