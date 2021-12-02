const fs = require("fs");

let rawData = fs.readFileSync("./input-day2.txt", "utf-8").split("\n");

let horizontal = 0;
let depth = 0;

for (let row of rawData) {
  let split = row.split(" ");
  if (split[0] === "forward") {
    horizontal += parseInt(split[1]);
  } else if (split[0] === "up") {
    depth -= parseInt(split[1]);
  } else if (split[0] === "down") {
    depth += parseInt(split[1]);
  } else {
    continue;
  }
}

console.log(`Part 1 ${horizontal * depth}`);

horizontal = 0;
depth = 0;
let aim = 0;

for (let row of rawData) {
  let split = row.split(" ");
  if (split[0] === "forward") {
    horizontal += parseInt(split[1]);
    depth += aim * parseInt(split[1]);
  } else if (split[0] === "up") {
    aim -= parseInt(split[1]);
  } else if (split[0] === "down") {
    aim += parseInt(split[1]);
  } else {
    continue;
  }
}

console.log(`Part 2 ${horizontal * depth}`);
