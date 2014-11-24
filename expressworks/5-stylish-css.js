var express = require('express'),
    stylus = require('stylus'),
    path = process.argv[3],
    port = process.argv[2];

var app = express();
app.use(stylus.middleware(path));
app.use(express.static(path));
app.listen(port);
