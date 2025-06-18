const fs = require("fs");

// 2️⃣ READ => readFileSync vs readFile ✅

// ✅ Synchronous Read
// This will block the execution until the file is completely read
// Syntax: fs.readFileSync(path, encoding)
const syncData = fs.readFileSync("file.txt", "utf8");
console.log("📘 Synchronous Read Output:\n", syncData);

// ⚠️ Important Note:
// If 'fs.writeFile' was used before this without waiting for completion,
// it may not have written the data yet. That's because 'writeFile' is asynchronous.

// ✅ Asynchronous Read
// This runs in the background and does not block the execution
// Syntax: fs.readFile(path, encoding, callback)

fs.readFile("file.txt", "utf8", (err, asyncData) => {
  if (err) throw err;
  console.log("📘 Asynchronous Read Output:\n", asyncData);
});
