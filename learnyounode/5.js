var fs = require('fs'),
    p = require('path');

var path = process.argv[2],
    ext = "." + process.argv[3],
    output;

fs.readdir(process.argv[2], function (err, data) {
  if(err)
    console.log('an error has occurred');
  else
    output = data.filter(function (val, i, arr) {
      return p.extname(path + val) === ext;
    })
    .forEach(function (val, i, arr) {
      console.log(val);
    });
});
