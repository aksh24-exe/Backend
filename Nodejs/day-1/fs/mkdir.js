const fs = require("fs");

// 7️⃣ CREATE FOLDER => mkdirSync vs mkdir ✅

// ✅ Synchronous mkdir
// This blocks execution until the folder is created
// Syntax: fs.mkdirSync(path, [options])
try {
  fs.mkdirSync("myFolderSync", { recursive: true });
  console.log("✅ Synchronous folder created: 'myFolderSync'");
} catch (err) {
  console.error("❌ Error creating folder synchronously:", err);
}

// ✅ Asynchronous mkdir
// This runs in the background
// Syntax: fs.mkdir(path, [options], callback)
fs.mkdir("myFolderAsync", { recursive: true }, (err) => {
  if (err) {
    console.error("❌ Error creating folder asynchronously:", err);
    return;
  }
  console.log("✅ Asynchronous folder created: 'myFolderAsync'");
});
