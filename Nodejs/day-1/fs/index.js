// 📁 FILE SYSTEM OPERATIONS IN NODE.JS ✅

// The 'fs' module in Node.js provides a rich set of methods to work with files and directories.
// It supports both synchronous (blocking) and asynchronous (non-blocking) approaches.

// 🔧 Load the File System module
const fs = require("fs");

// ⏱️ Async = Non-blocking (recommended for most cases, especially servers)
// ⛓️ Sync  = Blocking (easier for scripts or CLI tools)

// 📘 List of File System Operations Covered:

// 1️⃣ WRITE FILE        => writeFile (async) vs writeFileSync (sync)
// 2️⃣ READ FILE         => readFile (async) vs readFileSync (sync)
// 3️⃣ APPEND / UPDATE   => appendFile (async) vs appendFileSync (sync)
// 4️⃣ DELETE FILE       => unlink (async) vs unlinkSync (sync)
// 5️⃣ RENAME FILE       => rename (async) vs renameSync (sync)
// 6️⃣ COPY FILE         => copyFile (async) vs copyFileSync (sync)
// 7️⃣ CREATE FOLDER     => mkdir (async) vs mkdirSync (sync)
// 8️⃣ READ DIRECTORY    => readdir (async) vs readdirSync (sync)
// 9️⃣ DELETE FOLDER     => rm (async) vs rmSync (sync)
// 🔟  FILE INFO         => stat (async) vs statSync (sync)
// 1️⃣1️⃣ WATCH CHANGES   => fs.watch (async only, no sync version)

// 💡 NOTES:
// - Always include error handling when using fs methods.
// - Use the async versions for non-blocking performance in production apps.
// - Use sync versions for simple scripts or startup tasks.

// ✅ For full examples of each operation, refer to individual code blocks in your project.
