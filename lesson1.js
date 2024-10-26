const path = require("path");
const relative = path.join(__dirname, "/content");
const absolute = path.resolve(__dirname, "/content", "subfolder");
console.log(relative);
console.log(absolute);
