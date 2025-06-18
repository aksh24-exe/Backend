const fs = require("fs");

// 8️⃣ READ DIRECTORY => readdirSync vs readdir ✅

// ✅ Synchronous: Blocking
// Syntax: fs.readdirSync(path)
try {
  const filesSync = fs.readdirSync(".");
  console.log("📁 Synchronous Directory Listing:");
  console.log(filesSync);
} catch (err) {
  console.error("❌ Error reading directory synchronously:", err);
}

// ✅ Asynchronous: Non-blocking
// Syntax: fs.readdir(path, callback)
fs.readdir(".", (err, filesAsync) => {
  if (err) {
    console.error("❌ Error reading directory asynchronously:", err);
    return;
  }
  console.log("📁 Asynchronous Directory Listing:");
  console.log(filesAsync);
});
