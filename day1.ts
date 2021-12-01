import * as fs from "fs";

const input = fs.readFileSync("./input/day1.txt", "utf-8");
const inputArray: string[] = input.split("\n");

function day1a() {
  let count = 0;

  inputArray.forEach((line: string, index: number) => {
    if (+line > +inputArray[index - 1]) {
      count++;
    }
  });

  console.log(count);
}

function day1b() {
  let count = 0;
  const sums: number[] = inputArray.map((line: string, index: number) => {
    return +line + +inputArray[index - 1] + +inputArray[index - 2];
  });

  sums.forEach((sum: number, index: number) => {
    if (sum > sums[index - 1]) {
      count++;
    }
  });

  console.log(count);
}

day1a();
day1b();
