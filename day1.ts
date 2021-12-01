import * as fs from "fs";

const input = fs.readFileSync("./input/day1.txt", "utf-8");
const inputArray: string[] = input.split("\n");

function day1a(): number {
  let count = 0;

  inputArray.forEach((line: string, index: number) => {
    if (+line > +inputArray[index - 1]) {
      count++;
    }
  });

 return count;
}

function day1b(): number {
  let count = 0;
  const sums: number[] = inputArray.map((line: string, index: number) => {
    return +line + +inputArray[index - 1] + +inputArray[index - 2];
  });

  sums.forEach((sum: number, index: number) => {
    if (sum > sums[index - 1]) {
      count++;
    }
  });

  return count;
}

console.log("a: " + day1a());
console.log("b: " + day1b());
