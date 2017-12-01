var http = require("http");
var PORT = 7000;

function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log('Hi You Look Good Today!');
});