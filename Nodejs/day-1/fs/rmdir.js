const fs = require("fs");

// 9️⃣ DELETE FOLDER/FILE => fs.rmSync / fs.rm ✅

// Note: fs.rmdir and fs.rmdirSync are deprecated for recursive deletion.
// Use fs.rm / fs.rmSync with { recursive: true } instead.

// ✅ Synchronous Delete
// Syntax: fs.rmSync(path, { recursive: true, force: true })
// - recursive: true ➜ Allows deletion of non-empty folders and their contents
// - force: true     ➜ Prevents errors if the folder/file doesn't exist

try {
  fs.rmSync("myfolder", {
    recursive: true, // delete folders and subfolders recursively
    force: true, // skip error if the folder does not exist
  });
  console.log("✅ Synchronous deletion complete: 'myfolder' removed");
} catch (err) {
  console.error("❌ Error during synchronous delete:", err);
}

// ✅ Asynchronous Delete
// Syntax: fs.rm(path, { recursive: true, force: true }, callback)

fs.rm(
  "myfolder1",
  {
    recursive: true, // delete folders and subfolders recursively
    force: true, // skip error if the folder does not exist
  },
  (err) => {
    if (err) {
      console.error("❌ Error during asynchronous delete:", err);
      return;
    }
    console.log("✅ Asynchronous deletion complete: 'myfolder1' removed");
  }
);
