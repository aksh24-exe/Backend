Question 1 Req and Res  is a object or array

In Node.js (especially with Express.js), req and res are objects, not arrays.

✅ req (Request Object)
This represents the HTTP request and contains information like:

req.body – data sent in the request body (e.g., POST)

req.query – query parameters (e.g., /search?term=book)

req.params – route parameters (e.g., /user/:id)

req.headers – request headers

req.method – HTTP method (GET, POST, etc.)

✅ res (Response Object)
This is used to send a response back to the client:

res.send() – send a response

res.json() – send a JSON response

res.status() – set HTTP status

res.redirect() – redirect to another URL

🧠 Example:
```js

app.post("/signup", (req, res) => {
  console.log(req.body); // Object containing body data
  res.send("User signed up"); // res is an object too
});

```

```js
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
```

Question - 2 How promises execute in eventloop in Nodejs