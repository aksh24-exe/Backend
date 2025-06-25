const EventEmitter = require("events");

const emitter = new EventEmitter(); // instance of EventEmitter

// 1. creating ---> .on()

// Listen for events using .on()

// emitter.on("GREET", (username) => {
//   console.log("Hello " + username);
// });

emitter.on("LOGIN", (data) => {
  console.log(data);
});

// 2. using phase --> .emit()

// Emit events using .emit()

// emitter.emit("GREET", "Akshat");

emitter.emit("LOGIN", { name: "Akshat", email: "akshat@gmail.com" });
