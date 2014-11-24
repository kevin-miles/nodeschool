var express = require('express'),
    stylus = require('stylus'),
    crypto = require('crypto'),
    port = process.argv[2];

var app = express();
app.put('/message/:ID', function (req, res) {
  res.end(crypto
  .createHash('sha1')
  .update(new Date().toDateString() + req.params.ID)
  .digest('hex'));
});
app.listen(port);
