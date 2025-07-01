import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json()); //if client can send any data in json formate then we used middleware

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

function sayHello(req, res, next) {
  console.log("Hello");
  next(); // read indepth about next
}

// app.use(logger); // global middleware

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/v1/user", userRouter);

// global middleware (req, res , next)✅
// specific middleware
// inbuilt middleware

// Use cases of middleware. --> request(modify, attach, update, delete)
// 1.authentication
// 2.logger
// 3.error handling
// 4.request parsing
// 5.response compression
// 6.cors
// 7. authorization
// 8. rate limiting
// 9. compression

// app.get("/about", logger, sayHello, (req, res) => {
//   res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact Page");
// });

// app.get("get-users", (req, res) => {
//   res.send("Users Details");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
