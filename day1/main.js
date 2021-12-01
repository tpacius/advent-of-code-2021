const fs = require("fs");

let rawData = fs.readFileSync("./input-day1.txt", "utf-8").split("\n");

let count = 0;
let prev = null;

for (let data of rawData) {
  if (prev == null) {
    prev = data;
    continue;
  }

  if (parseInt(prev) < parseInt(data)) {
    count++;
  }
  prev = data;
}

console.log(count);
