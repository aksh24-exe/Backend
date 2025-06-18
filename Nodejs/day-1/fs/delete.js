const fs = require("fs");

// 4️⃣ DELETE => unlinkSync vs unlink ✅

// ✅ Synchronous Delete
// This blocks execution until the file is deleted
// Syntax: fs.unlinkSync(path)

// Optional: Check if file exists before deleting
if (fs.existsSync("file.txt")) {
  fs.unlinkSync("file.txt");
  console.log("✅ Synchronous delete complete: file.txt has been removed");
} else {
  console.log("⚠️ file.txt does not exist (Sync check)");
}

// ✅ Asynchronous Delete
// This runs in background and does not block execution
// Syntax: fs.unlink(path, callback)

fs.writeFileSync("file.txt", "This file will be deleted asynchronously."); // recreate file for demo

fs.unlink("file.txt", (err) => {
  if (err) throw err;
  console.log("✅ Asynchronous delete complete: file.txt has been removed");
});
