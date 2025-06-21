const http = require("http");

const server = http.createServer((req, res) => {
  console.log(Array.isArray(req)); // false
  console.log(typeof req); // 'object'

  console.log(Array.isArray(res)); // false
  console.log(typeof res); // 'object'

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(3000);
