import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser("asghjdvhjjh6576dgjhgcdshjgvbcybcjhvasdvihvjsdvgdsubhcdsyt"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/set-cookies", (req, res) => {
//   res.cookie("token", "my-tooken", {
//     maxAge: 1000 * 60 * 60 * 24,
    //   });
    
    // res.cookie("theme","dark",{signed: true})
    res.cookie("age","21",{signed: true})
  // name => value
  res.send("Cookie send");
});
app.get("/get-cookies", (req, res) => {
  console.log(req.cookies.token); // req.cookies send object
  console.log(req.cookies); //{ theme: 'dark', token: 'my-tooken' }
  console.log(req.signedCookies.age); //{ theme: 'dark', token: 'my-tooken' }

  //   console.log(req.headers.cookie); //token=my-tooken

  // name => value
  res.send("Cookie recived");
});

app.listen(3000, () => {
  console.log("Server is running");
});
