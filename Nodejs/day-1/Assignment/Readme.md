## ❓ Question 1: Can we use `module.exports` as an array?

✅ **Yes**, `module.exports` can be used to export any data type — including **arrays**, **objects**, **functions**, or even a **single value**.

---

### 📁 Example Structure:

```
Assignmnet/
│
├── index.js
├── fruits.js
├── operation.js
└── README.md
```

---

### 📄 `operation.js`

```js
const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

// Exporting functions as an array
module.exports = [add, substract];
```

---

### 📄 `fruits.js`

```js
module.exports = ["apple", "banana", "mango"];
```

---

### 📄 `index.js`

---

```js
const fruits = require("./fruits");
const [add, substract] = require("./operation");

console.log(add(1, 2)); // Output: 3
console.log(substract(2, 3)); // Output: -1

console.log(fruits); // Output: [ 'apple', 'banana', 'mango' ]
```

---

## Note: - 
Using an array for export is valid, but slightly less readable than named object exports when the module gets large.

---

## ❓ Question 2: What is UTF-8 Encoding in Node.js?

**UTF-8 (Unicode Transformation Format - 8-bit)** is a character encoding capable of encoding all possible characters (code points) in Unicode.

### ✅ Key Features:
- Supports all languages and symbols (English, Hindi, emojis, etc.)
- Default encoding used in Node.js for text file operations
- Converts binary data into human-readable strings
- Backward-compatible with ASCII

### 🔍 Example in Node.js

```js
const fs = require("fs");

// ✅ Reading file with UTF-8 encoding (returns readable string)

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data); // Outputs: Hello World (as a string)
});

// ⚠️ Without UTF-8, Node.js returns a Buffer

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data); // Outputs: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
});
