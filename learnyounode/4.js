var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
  if(err)
    console.log('an error has occurred');
  else
    console.log(data.toString().split('\n').length - 1);
});
