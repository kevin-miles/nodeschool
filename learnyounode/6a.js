var fs = require('fs'),
    p = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, data) {
      if (err)
        return callback(err);
      else
        output = data.filter(function(val, i, arr) {
          return p.extname(dir + val) === ("." + ext);
        });
        callback(null, output);
    });
};
