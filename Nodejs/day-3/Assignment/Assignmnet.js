const EventEmitter = require("events");
const fs = require("fs");

const emitter = new EventEmitter();

const eventCounts = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileupdate: 0,
};

const logFile = "eventLogs.json";

function saveCounts() {
  fs.writeFileSync(logFile, JSON.stringify(eventCounts));
}

if (fs.existsSync(logFile)) {
  const data = fs.readFileSync(logFile, "utf-8");
  Object.assign(eventCounts, JSON.parse(data));
}

// 1. login
emitter.on("LOGIN", (username) => {
  eventCounts.login++;
  console.log(`${username} logged in successfully`);
  saveCounts();
});

// 2. logout
emitter.on("LOGOUT", (username) => {
  eventCounts.logout++;
  console.log(`${username} logout in successfully`);
  saveCounts();
});

// 3. purchase
emitter.on("PURCHASE", (username) => {
  eventCounts.purchase++;
  console.log(`Purchase successfully`);
  saveCounts();
});
// 4. profileupdate
emitter.on("PROFILEUPDATE", (username) => {
  eventCounts.profileupdate++;
  console.log(`ProfileUpdate successfully`);
  saveCounts();
});

emitter.emit("LOGIN", "Akshat");
emitter.emit("LOGOUT", "Akshat");
emitter.emit("PURCHASE", "Akshat");
emitter.emit("PROFILEUPDATE", "Akshat");
