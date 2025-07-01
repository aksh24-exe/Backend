import express from 'express';

const app = express();

//API Endpoint
// This is a simple API endpoint that responds with "Hello World!" when accessed.
// It uses the Express framework to create a web server and define a route for the root URL
// ("/"). When a GET request is made to this endpoint, it sends back a plain text response.
// This is a common starting point for building web applications or APIs using Express.js.
// The server listens on port 3000, and when it starts, it logs a message
// indicating that it is running and providing the URL where it can be accessed.
// To run this code, you need to have Node.js and Express installed.
// You can start the server by running `npm start` or `npm run dev` in the terminal,
// and then you can access the endpoint by navigating to `http://localhost:3000` in your web browser or using a tool like Postman or curl.
// This code is a basic example of how to set up an Express server and define a simple
// API endpoint. It serves as a foundation for building more complex applications by adding more routes,
app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.get("/api/v1/hello", (req, res) => {
  res.send({
    message: "Hello World from API v1!"
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});