var net = require('net'),
    date = new Date();

var server = net.createServer(function(socket) {
  var output =
    date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' + // starts at 0
    date.getDate() + ' ' + // returns the day of month
    date.getHours() + ':' +
    date.getMinutes() + '\n';
  socket.write(output);
  socket.end();
});
server.listen(process.argv[2]);
