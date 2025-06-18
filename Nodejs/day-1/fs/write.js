const fs = require("fs");

// 1️⃣ write => writeFileSync vs writeFile ✅

// ✅ Sync method
// This will block the execution until the file is written
// Syntax: fs.writeFileSync(path, content)
fs.writeFileSync(
  "file.txt",
  "Hello World! This is written using writeFileSync.\n"
);

// ✅ Async method
// This is non-blocking and runs in the background
// Syntax: fs.writeFile(path, content, callback)
fs.writeFile(
  "file.txt",
  "Hello! I am written using Async writeFile.\n",
  (err) => {
    if (err) throw err;
    console.log(
      "✅ Async write complete: file.txt has been written successfully."
    );
  }
);
