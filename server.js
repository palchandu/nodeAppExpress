//Basic module require
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//Serving Static Files to clients
app.use(express.static('assets'))
//request and response
// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
// This responds a POST request for the homepage
app.post('/',function(req,res){
    res.send("Hello POST");
})
// This responds a DELETE request for the /del_user page.
app.delete('/del_user',function(req,res){
  res.send("user DELETED");
})
// This responds a GET request for the /list_user page.
app.get('/list_user',function(req,res){
  res.send("Page Listing");
})
// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd',function(req,res){
  res.send('Page Pattern Match');
})
//Processing GET Request for first name and last Name
app.get('/process_get',function(req,res){
  response={
  first_name:req.query.first_name,
  last_name:req.query.last_name
};
console.log(response);
res.end(JSON.stringify(response));
})
//Processing POST Request for first name and last Name
//not working
app.get('/process_post',function(req,res){
  response1={
  pfirst_name:req.query.post_first_name,
  plast_name:req.query.post_last_name
};
console.log(response1);
res.send(JSON.stringify(response1));
})
//Server Setup
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
