var express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send('we are starting this great project');
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })