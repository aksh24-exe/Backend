# 📁 Node.js File System (fs) Module Guide

A practical guide to understand and implement core file system operations in Node.js using both asynchronous and synchronous methods.

---


---

## 🧰 Operations Covered

| #   | Purpose           | Async Method        | Sync Method           | Example File         |
|-----|-------------------|---------------------|------------------------|----------------------|
| 1️⃣ | Write File        | `fs.writeFile`      | `fs.writeFileSync`     | `write.js`           |
| 2️⃣ | Read File         | `fs.readFile`       | `fs.readFileSync`      | `read.js`            |
| 3️⃣ | Append File       | `fs.appendFile`     | `fs.appendFileSync`    | `update.js`          |
| 4️⃣ | Delete File       | `fs.unlink`         | `fs.unlinkSync`        | `delete.js`          |
| 5️⃣ | Rename File       | `fs.rename`         | `fs.renameSync`        | `rename.js`          |
| 6️⃣ | Copy File         | `fs.copyFile`       | `fs.copyFileSync`      | `copyfile.js`        |
| 7️⃣ | Create Folder     | `fs.mkdir`          | `fs.mkdirSync`         | `mkdir.js`           |
| 8️⃣ | Read Directory    | `fs.readdir`        | `fs.readdirSync`       | `readdir.js`         |
| 9️⃣ | Remove Folder     | `fs.rm`             | `fs.rmSync`            | `rmdir.js`           |
| 🔟 | File Info         | `fs.stat`           | `fs.statSync`          | `stat.js`            |
| 1️⃣1️⃣ | Watch File Changes | `fs.watch`          | ❌ Not available         | `watch.js`           |
| 💥 | Promise-based API | `fs.promises.*`     | —                      | `fs.promises.js`     |

---

## 📘 About the `fs` Module

The `fs` module in Node.js enables interaction with the file system in a way modeled on standard POSIX functions. It allows reading, writing, updating, renaming, copying, watching, and deleting files and directories.

It supports:
- **Synchronous** (blocking) methods
- **Asynchronous** (non-blocking) methods
- **Promise-based** API via `fs.promises`

Use **sync** methods for quick scripts and **async** for scalable production code.


---

## ✅ Checklist: Radio Check Style

Use this list to track what you've practiced:

- [ ] 📖 Read File
- [ ] ✍️ Write File
- [ ] ➕ Append File
- [ ] 🗑️ Delete File
- [ ] 🔀 Rename File
- [ ] 📄 Copy File
- [ ] 📂 Create Directory
- [ ] 📋 Read Directory
- [ ] ❌ Remove Directory
- [ ] ℹ️ Get File Info

---

## 📘 How to Use

### Install Node.js

Ensure Node.js is installed:

```bash
node -v

---

## ✅ How to Run

Make sure you have Node.js installed. Then run any file using:

```bash
node write.js
node read.js

---
