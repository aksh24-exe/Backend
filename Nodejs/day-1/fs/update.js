const fs = require("fs");

// 3️⃣ UPDATE => appendFileSync vs appendFile ✅

// ✅ Synchronous append
// This blocks execution until the content is added
// Syntax: fs.appendFileSync(path, content)
fs.appendFileSync("file.txt", "\n🙏 Plss give some marks (Sync)");
console.log("✅ Synchronous append complete");

// ✅ Asynchronous append
// This does not block execution and works in the background
// Syntax: fs.appendFile(path, content, callback)
fs.appendFile("file.txt", "\n🙏 Plss give me one chance (Async)", (err) => {
  if (err) throw err;
  console.log("✅ Asynchronous append complete");
});
