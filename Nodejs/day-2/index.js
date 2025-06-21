const http = require("http");
const url = require("url");

// Basic HTTP Server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" }); // Sets response header
  res.write("Hello, this is plain text!"); //Ends the response and send data back to the client
  res.end("hello");
});

//Response Based on Routes

const server2 = http.createServer((req, res) => {
  if (res.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Home Page");
    res.end("<h1>Home Page</h1>");
  } else if (res.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("About Page");
    res.end("<h1>About Page</h1>");
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

// server2.listen(3000, () => {
//   console.log("Server is running");
// });


// Handling JSON Response

const server3 = http.createServer((req, res) => {
  const data = { name: "Code Snippet", language: "JavaScript" };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
});

// server3.listen(3000);

const server4 = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true = parse query string
  const name = parsedUrl.query.name;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello, ${name || "Guest"}!`);
});

server4.listen(3000);