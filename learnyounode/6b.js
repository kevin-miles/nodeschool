var mod = require('./6a.js');

var path = process.argv[2],
    ext = process.argv[3];

  mod(path, ext, function(err, data) {
    if (err) console.log(err);
    else data.forEach(function(val, i, arr) {
      console.log(val);
    });
  });
