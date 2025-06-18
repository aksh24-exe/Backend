const fs = require("fs");

// 🔟 FILE INFO => fs.statSync vs fs.stat ✅

// ✅ Synchronous Stat
// Syntax: fs.statSync(path)
// Used to get information about a file or directory (blocking)
try {
  const statSync = fs.statSync("source.txt");

  console.log("📄 Synchronous File Stats:");
  console.log("Is File?      ➜", statSync.isFile()); // true if it's a file
  console.log("Is Directory? ➜", statSync.isDirectory()); // true if it's a folder
  console.log("Size (bytes)  ➜", statSync.size); // shows file size in bytes
  console.log("Last Modified ➜", statSync.mtime); // last modified date
} catch (err) {
  console.error("❌ Error reading file stats synchronously:", err);
}

// ✅ Asynchronous Stat
// Syntax: fs.stat(path, callback)
// Used to get file stats in a non-blocking way

fs.stat("source.txt", (err, statAsync) => {
  if (err) {
    console.error("❌ Error reading file stats asynchronously:", err);
    return;
  }

  console.log("\n📄 Asynchronous File Stats:");
  console.log("Is File?      ➜", statAsync.isFile()); // true if it's a file
  console.log("Is Directory? ➜", statAsync.isDirectory()); // true if it's a folder
  console.log("Size (bytes)  ➜", statAsync.size); // shows file size in bytes
  console.log("Last Modified ➜", statAsync.mtime); // last modified date
});
