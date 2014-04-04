var http = require('http');

var port = Number(process.env.PORT || 5000);

console.log("Starting server on port " + port + " ...");

http.createServer(function(req, res){

  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("HelloWorld\n");

}).listen(port);

console.log("Server up!");