var http = require('http'),
    concat = require('concat-stream'),
    url = process.argv[2];

http.get(url, function (res) {
  res.setEncoding('utf8');
  res.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
  res.on("data", function (data) {
  });
  res.pipe(concat(function (data) {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
