var express = require('express');
var app = express();
app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.get('/home', function (req, res) {
  res.render('index', {date: new Date().toDateString()});
});
app.listen(process.argv[2]);

// FYI:
// this was not working because of an issue with the 1st exercise
// still running in the background, causing it to test against the wrong criteria
// run the following: killall node
// and try to verify again. it should work, assuming your code is correct ;)
