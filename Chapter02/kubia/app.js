const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("This message is updated by Jal Patel in week 03 lab of CLO835 \n You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

