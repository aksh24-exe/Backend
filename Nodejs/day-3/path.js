const path = require("path");

console.log(__dirname); ///Users/macbookpro/Desktop/Backend/Nodejs/day-3
console.log(__filename); ///Users/macbookpro/Desktop/Backend/Nodejs/day-3/index.js

// 1. Join() :- Joins all arguments into a single path

const filePath = path.join(__dirname, "data", "students", "data.txt");
console.log(filePath); ///Users/macbookpro/Desktop/Backend/Nodejs/day-3/data/students/data.txt

// 2. parse() :- Returns an object with root, dir, base, ext, name

console.log(path.parse(filePath));
/*{
    root: '/',
    dir: '/Users/macbookpro/Desktop/Backend/Nodejs/day-3/data/students',
    base: 'data.txt',
    ext: '.txt',
    name: 'data'
}
  */

// 3. resolve() :- Resolves a sequence of paths into an absolute path

console.log(path.resolve(filePath));

// 4. extname()

console.log(path.extname(filePath)); //.txt

// 5. basename() :- Gets the file name from a path

console.log(path.basename(filePath)); //data.txt

//6. dirname() :- Gets the directory name

console.log(path.dirname(filePath)); ///Users/macbookpro/Desktop/Backend/Nodejs/day-3/data/students
