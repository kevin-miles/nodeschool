var http = require('http'),
    concat = require('concat-stream'),
    url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4],
    data1,
    data2,
    data3;

var getter = function (url, data, callback) {
  http.get(url, function (res) {
    res.setEncoding('utf8');
    res.on('error', function(e) {
      callback(e);
    });
    res.pipe(concat(function (d) {
      data = d.toString();
    }));
    res.on('end', function () {
      callback(null, data);
    });
  });
};

getter(url1, data1, function (err, data) {
  if (err)
    console.log("ERROR @ url1: " + e.message);
  else
    data1 = data;
    getter(url2, data2, function (err, data) {
      if(err)
        console.log("ERROR @ url2: " + e.message);
        data2 = data;
        getter(url3, data3, function (err, data) {
          if(err)
            console.log("ERROR @ url3: " + e.message);
            else
              data3 = data;
              console.log(data1);
              console.log(data2);
              console.log(data3);
    });
  });
});
