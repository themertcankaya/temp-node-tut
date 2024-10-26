// const amount = 12;

// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

// console.log("hey it's my first node app ");

// const { john, mertcan } = require("./names");
// const sayHi = require("./utils");

// sayHi(john);
// sayHi(mertcan);

// const os = require("os");
// console.log(os.userInfo());
// console.log(os.uptime() / 3600);

// const filePath = path.join("/content", "/subfolder", "/test.txt");
// const filePath2 = path.join("content", "subfolder", "test.txt");
// console.log(path.sep);
// console.log(filePath);
// console.log(filePath2);
// console.log(path.join(__dirname, filePath2));

// const base = path.basename(filePath);
// console.log(base);

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/subfolder/first.txt", "utf8");
// const second = readFileSync("./content/subfolder/second.txt", "utf8");

// console.log(first, second);

// writeFileSync(
//   "./content/subfolder/write.txt",
//   `Hello write ${first} and ${second}`,
//   { flag: "a" }
// );

const _ = require("lodash");

const items = [1, 2, [3], [4, [5]]];
const newItems = _.flattenDeep(items);
console.log(items);
console.log(newItems);
