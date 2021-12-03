import * as fs from "fs";
import { bin2dec } from "./utils";

const input = fs.readFileSync("./input/day3.txt", "utf-8");
const inputArray: string[] = input.split("\n");

function day3a(): number {
  let gamma = "";
  let epsilon = "";
  const bitCounts = new Map<number, number>();
  const half = inputArray.length / 2;

  inputArray.forEach((line: string) => {
    const bits = [...line];

    for (let i = 0; i < bits.length; i++) {
      bitCounts.set(i, (bitCounts.get(i) || 0) + +bits[i]);
    }
  });

  for (let [key, value] of bitCounts) {
    gamma = value > half ? gamma + "1" : gamma + "0";
    epsilon = value > half ? epsilon + "0" : epsilon + "1";
  }

  return bin2dec(gamma) * bin2dec(epsilon);
}

console.log("a: " + day3a());
