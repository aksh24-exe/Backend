const fs = require("fs");

// 6️⃣ COPY => copyFileSync vs copyFile ✅

// First, let's ensure the source file exists (for demo purposes)
fs.writeFileSync("source.txt", "📄 This is the content of the source file.");

// ✅ Synchronous Copy
// This blocks execution until copy is complete
// Syntax: fs.copyFileSync(src, dest)
try {
  fs.copyFileSync("source.txt", "destination_sync.txt");
  console.log(
    "✅ Synchronous copy complete: 'source.txt' ➜ 'destination_sync.txt'"
  );
} catch (err) {
  console.error("❌ Error during synchronous copy:", err);
}

// ✅ Asynchronous Copy
// This runs in the background and doesn’t block execution
// Syntax: fs.copyFile(src, dest, callback)
fs.copyFile("source.txt", "destination_async.txt", (err) => {
  if (err) {
    console.error("❌ Error during asynchronous copy:", err);
    return;
  }
  console.log(
    "✅ Asynchronous copy complete: 'source.txt' ➜ 'destination_async.txt'"
  );
});
