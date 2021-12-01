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

console.log(`Part 1 ${count}`);

let data = rawData.map((x) => parseInt(x));

let sumCount = 0;

function numberOfGreaterSums(arr, window) {
  let prevSum = 0;
  let currentSum = 0;
  for (let i = 0; i < window; i++) {
    currentSum += arr[i];
  }
  prevSum = currentSum;
  for (let i = window; i < arr.length; i++) {
    currentSum = prevSum - arr[i - window] + arr[i];
    if (currentSum > prevSum) {
      sumCount++;
    }
  }
}

numberOfGreaterSums(data, 3);
console.log(`Part 2 ${sumCount}`);
