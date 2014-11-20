var http = require('http'),
    fs = require('fs'),
    url = require('url');

var port = process.argv[2];

http.createServer(function (req, res) {
  if(req.method === 'GET'){
    var date,
        json,
        parsed = url.parse(req.url, true),
        obj = {};

    switch(parsed.pathname){
      case '/api/parsetime':
        date = new Date(url.parse(req.url, true).query.iso);
        obj.hour = date.getHours();
        obj.minute = date.getMinutes();
        obj.second = date.getSeconds();
        json = JSON.stringify(obj);
        break;
      case '/api/unixtime':
        date = Date.parse(url.parse(req.url, true).query.iso);
        obj.unixtime = date;
        json = JSON.stringify(obj);
        break;
      default:
        var err = true;
    }

    if(err) {
      res.writeHead(404);
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(json);
      res.end();
    }
  }
}).listen(port);
