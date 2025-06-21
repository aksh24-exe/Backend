const fs = require("fs"); // ✅ Module loaded (not a callback)

// ✅ Top-level code
console.log("Hello World");

// ✅ Event Callback Registration #1
fs.writeFile("file.txt", "Namesta", (err) => {
  if (err) throw err;
});
// ⬆ This registers a callback that will be invoked when the file write finishes (asynchronously).
//    It is registered for the "I/O callbacks" phase in the event loop.

// ✅ Event Callback Registration #2
setTimeout(() => {
  console.log("Hello from setTimeout");
}, 0);
// ⬆ Registered for the "Timers" phase of the event loop (executes after 0 ms or more)

// ✅ Event Callback Registration #3
setImmediate(() => {
  console.log("Hello from setImmediate");
});
// ⬆ Registered for the "Check" phase (runs after I/O callbacks, if any)

// ✅ Top-level code continues
console.log("Hello from End");


// 1. Top-Level Code
//    - console.log("Hello World")
//    - console.log("Hello from End")

// 2. fs module loaded (CommonJS wrapper applied)

// 3. Register Event Callbacks:
//    - fs.writeFile()
//    - setTimeout()
//    - setImmediate()

// 4. Event Loop Execution Order:
//    - Timers Phase (setTimeout)
//    - I/O Callbacks (fs.writeFile, if any)
//    - Check Phase (setImmediate)

// Thread Pool:
// Node.js uses a thread pool (libuv) for heavy tasks like file system, crypto, DNS, etc.
// Default thread pool size: 4
// Configurable: min 4 → max 128 (via UV_THREADPOOL_SIZE)

// Output: -

// When we run first time

// Hello World
// Hello from End
// Hello from setImmediate
// Hello from setTimeout

// When we run Second time

// Hello World
// Hello from End
// Hello from setTimeout
// Hello from setImmediate

// Two times diiferent output
// due to setTimeout and setImmediate
// This happens due to non-deterministic scheduling when both setTimeout(…, 0) and setImmediate() are used together with I/O.

