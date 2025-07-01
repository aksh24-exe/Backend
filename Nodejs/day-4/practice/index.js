const http = require("http");
const fs = require("fs");
const { Transform, pipeline } = require("stream")



const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }
  // *1 Dowloading Files (Bad Way)
  // const file = fs.readFileSync("./sample.txt");
  // console.log(file);

  // *2 Dowloading Files (Good Way)
  //   const readableStream = fs.createReadStream("./sample.txt");

  //   readableStream.pipe(res);

  // *3 Copying file Bad Way
  // const file = fs.readFileSync("./sample.txt");
  // fs.writeFileSync("./output.txt", file)
  // res.end(file)

  // *4 Copying file (Good Way)
  //   const readStream = fs.createReadStream("./sample.txt");
  //   const writeStream = fs.createWriteStream("./output.txt");

  //   readStream.on("data", (chunk) => {
  //     console.log("Chunk: ", chunk.toString("utf-8"));
  //     writeStream.write(chunk.toString("utf-8"));
  //   });

  // String Processing
//   const sampleFilesStream = fs.createReadStream("./sample.txt");
//   const outputWriteableStream = fs.createWriteStream("./output.txt");

//   sampleFilesStream.on("data", (chunk) => {
//     const upperCaseString = chunk.toString().toUpperCase();
//     const finalString = upperCaseString.replaceAll(/Akshat/gi, "Sigma");

//     outputWriteableStream.write(finalString);
    //   });
    

  const sampleFilesStream = fs.createReadStream("./sample.txt");
    const outputWriteableStream = fs.createWriteStream("./output.txt");
    
    const transfromStream = new Transform({
        transform(chunk, encoding, callback) {
            const replaceWord = chunk.toSting()
        }
    })

//   sampleFilesStream.on("data", (chunk) => {
//     const upperCaseString = chunk.toString().toUpperCase();
//     const finalString = upperCaseString.replaceAll(/Akshat/gi, "Sigma");

//     outputWriteableStream.write(finalString);
    //   });
    
    // left side readablestream and right hand side writeablestreamin transformer always
    // we not do error handling in pipe
    // *1 Way of transformer
    //sampleFilesStream.pipe(transfromStream).on("error", () => { }).pipe(outputWriteableStream)
    
    // *2 Way of transformer
    // pipeline(sampleFilesStream, transfromStream, outputWriteableStream, (error) => {
    //     console.log(error);
        
    // })
});

server.listen(8000, () => {
  console.log("Serveris running on port 8000");
});
