// readable
// writeable
// duplex -> both read and write
// Transformer

const { Readable, Writable } = require("stream");

const readableStream = new Readable({
  highWaterMark: 2, // minimum :- 64 kb
  read() {},
});

readableStream.on("data", (chunk) => {
  console.log("Data is comming: ", chunk.toString("utf-8"));
  writableStream.write(chunk);
});

console.log(readableStream.push("Hello "));

const writableStream = new Writable({
  write(chunk) {
    console.log("Writing: ", chunk.toString());
  },
});
