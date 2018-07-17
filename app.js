var express = require("express"),
app = express(),
 bodyParser = require("body-parser");

app.use(express.static('views'))
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



app.engine('html', require('ejs').renderFile);

//Main App Route
app.get("/", function(req, res){
    res.render("index.html");
});

app.listen(3000, () => console.log('listening on port 3000!'))