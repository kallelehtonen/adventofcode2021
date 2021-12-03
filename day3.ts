import * as fs from "fs";

const input = fs.readFileSync("./input/day3.txt", "utf-8").trim();
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

function day3b(): number {
  let oxygen = "";
  let oxygenArray: string[] = [];
  let co2 = "";
  let co2Array: string[] = [];
  const binLength = inputArray[0].trim().length;

  oxygenArray = inputArray;
  co2Array = inputArray;

  for (let i = 0; i < binLength; i++) {
    if (oxygenArray.length === 1 && co2Array.length === 1) {
      break;
    }

    if (oxygenArray.length > 1) {
      oxygenArray = oxygenArray.filter((line: string) => line.charAt(i) === findBit(oxygenArray, i, "oxygen"));
      oxygen = oxygenArray[0];
    }

    if (co2Array.length > 1) {
      co2Array = co2Array.filter((line: string) => line.charAt(i) === findBit(co2Array, i, "co2"));
      co2 = co2Array[0];
    }
  }

  return bin2dec(oxygen) * bin2dec(co2);
}

function bin2dec(bin: string): number {
  return +parseInt(bin, 2).toString(10);
}

function findBit(input: string[], index: number, type: string): string {
  let count = 0;
  let bit = "";

  input.forEach((line: string) => {
    const bits = [...line];

    count = count + +bits[index];
  });

  switch (type) {
    case "oxygen":
      bit = (count >= input.length / 2) ? "1" : "0";
      break;

    case "co2":
      bit = (count >= input.length / 2) ? "0" : "1";
      break;
  }

  return bit;
}

console.log("a: " + day3a());
console.log("b: " + day3b());
