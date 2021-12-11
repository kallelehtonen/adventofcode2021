import * as fs from "fs";

const input = fs.readFileSync("./input/day7.txt", "utf-8").trim();
const positions: number[] = input.split(",").map(Number);

function day7a(): number {
  const originalPositions = [...positions];
  const target: number = median(originalPositions);

  return originalPositions
    .filter((crab: number) => crab !== target)
    .reduce((prev: number, crab: number) => prev + Math.abs(crab - target), 0);
}

function day7b(): number {
  const originalPositions = [...positions];
  const target: number = average(originalPositions);

  return originalPositions
    .filter((crab: number) => crab !== target)
    .reduce((prev: number, crab: number) => prev + consumption(crab, target), 0);
}

const median = (input: number[]): number => {
  return input.slice().sort((a: number, b: number) => a - b)[Math.floor(input.length / 2)];
};

const average = (input: number[]): number => {
  return Math.floor(input.reduce((sum: number, next: number) => sum + next, 0) / input.length);
};

const consumption = (input: number, target: number): number => {
  const distance = Math.abs(input - target);
  return (distance * (distance + 1)) / 2;
};

console.log("a: " + day7a());
console.log("b: " + day7b());
