var express = require('express'),
    file = process.argv[3],
    port = process.argv[2];

var app = express();
app.use(express.static(file));
app.listen(port);
