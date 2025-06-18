const fs = require("fs");

// 1️⃣1️⃣ WATCH FILE CHANGES => fs.watch (No sync version exists)

// ✅ Asynchronous Only
// Syntax: fs.watch(path, callback)
// Watches for changes (like edit, rename) in a file or directory

fs.watch("source.txt", (eventType, filename) => {
  if (filename) {
    // eventType can be 'rename' or 'change'
    console.log(`📢 Event: ${eventType} on file: ${filename}`);
  } else {
    // filename might not be provided on some systems
    console.log("⚠️ Change detected, but filename is not available.");
  }
});

// 🔔 Tip:
// You can use this for live monitoring like log files, config changes, or triggering rebuilds.
