const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data); // Outputs readable string
});

//Note:-
//If you omit "utf-8", Node.js will return a Buffer instead of a readable string:

// Without utf-8
fs.readFile("file.txt", (err, data) => {
    console.log(data); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
  });
  