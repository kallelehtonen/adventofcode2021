import * as fs from "fs";

const input = fs.readFileSync("./input/day1.txt", "utf-8");
const inputArray: string[] = input.split("\n");
let count = 0;

inputArray.forEach((line: string, index: number) => {
  if (+line > +inputArray[index - 1]) {
    count++;
  }
});

console.log(count);
