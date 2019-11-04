var express = require('express');
var marked = require('marked');
var path = require('path');
var fs = require('fs');

var app = express();

app.get('/', function(req, res){
   // console.log(marked('I am using __markdown__'));
    //res.send('Hello');
    var path = __dirname + '/markdown/index.md';
    var file = fs.readFile(path, 'utf8', function(err, data){
        if(err){
            console.log(err);
        }
        res.send(marked(data.toString()));
    });
});

app.listen('8000', function(){
    console.log('server started...');
});