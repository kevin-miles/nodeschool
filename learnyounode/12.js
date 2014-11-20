var http = require('http'),
    fs = require('fs');

var port = process.argv[2];

http.createServer(function (req, res) {
  if(req.method === 'POST'){
    var body = '';
    req.on('data', function (data) {
        body += data.toString().toUpperCase();

        // Too much POST data, kill the connection!
        if (body.length > 1e6)
            req.connection.destroy();
    });
    req.on('end', function () {
        res.write(body);
        res.end();
    });
  }
}).listen(port);

/*
OFFICIAL SOLUTION

    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))


*/
