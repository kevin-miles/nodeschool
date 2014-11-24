var express = require('express'),
    fs = require('fs'),
    port = process.argv[2],
    file = process.argv[3];

var app = express();
app.get('/books', function (req, res) {
  fs.readFile(file, function (err, data) {
    if(!err) res.send(JSON.parse(data));
  });
});
app.listen(port);
