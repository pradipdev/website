var express = require("express");
var app     = express();
var app2     = express();
var path    = require("path");


app2.use(express.static('Site'))

/*
app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});
*/

app2.listen(3000);
