var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  //print the request header
  console.log(req.headers);
  console.log('\n');

  //construct response message
  res.writeHead(200, {'Content-Type': 'text/html'}); //text/html indicates that the body of the response message contains html content
  res.end('<h1>Hello World</h1>');//once res.end is called the response message is sent back to the client
});

//start the server
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
