const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/endpoint") {
    res.end("Endpoint request");
  }
  res.end("Requested resource doesn't exist");
});

server.listen(5000);
