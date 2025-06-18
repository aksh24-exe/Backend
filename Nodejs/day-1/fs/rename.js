const fs = require("fs");

// 5️⃣ RENAME => renameSync vs rename ✅

// ✅ Synchronous Rename
// This blocks execution until renaming is done
// Syntax: fs.renameSync(oldPath, newPath)
if (fs.existsSync("file.txt")) {
  fs.renameSync("file.txt", "newfile_sync.txt");
  console.log(
    "✅ Synchronous rename complete: 'file.txt' ➜ 'newfile_sync.txt'"
  );
} else {
  console.log("⚠️ 'file.txt' not found for sync rename");
}

// ✅ Asynchronous Rename
// This runs in the background and doesn't block execution
// Syntax: fs.rename(oldPath, newPath, callback)

// Let's create a dummy file again for async demo
fs.writeFileSync("file_async.txt", "This is for async rename demo.");

fs.rename("file_async.txt", "newfile_async.txt", (err) => {
  if (err) throw err;
  console.log(
    "✅ Asynchronous rename complete: 'file_async.txt' ➜ 'newfile_async.txt'"
  );
});
