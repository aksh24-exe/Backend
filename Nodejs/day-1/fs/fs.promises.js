import { writeFile, readFile, appendFile, unlink } from "fs/promises";

// ✅ Function to write to a file using Promises
async function writeToFile() {
  try {
    await writeFile("file.txt", "Hello, I come from Promises");
    console.log("✅ File written successfully");
  } catch (error) {
    console.error("❌ Error while writing:", error);
  }
}
writeToFile();

// ✅ Function to read from a file using Promises
async function readToFile() {
  try {
    const data = await readFile("file.txt", "utf-8");
    console.log("📄 File content:\n", data);
    console.log("✅ File read successfully");
  } catch (error) {
    console.error("❌ Error while reading:", error);
  }
}
readToFile();

// ✅ Function to append to a file using Promises
async function appendToFile(value) {
  try {
    await appendFile("file.txt", value);
    console.log("✅ File appended successfully");
  } catch (error) {
    console.error("❌ Error while appending:", error);
  }
}
appendToFile("\n👉 Promises callback");

// ✅ Function to delete a file using Promises
async function fileUnlink() {
  try {
    await unlink("file.txt");
    console.log("✅ File deleted successfully");
  } catch (error) {
    console.error("❌ Error while deleting file:", error);
  }
}
fileUnlink();
