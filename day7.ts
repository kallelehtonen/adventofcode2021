import * as fs from 'fs';

const input = fs.readFileSync("./input/day7.txt", "utf-8").trim();
const positions: number[] = input.split(",").map(Number);

function day7a(): number {
  const originalPositions = [...positions];
  const target: number = median(originalPositions);

  return originalPositions
    .filter((grab: number) => grab !== target)
    .reduce((prev: number, grab: number) => prev + Math.abs(grab - target), 0);
}

const median = (input: number[]): number => {
  return input.slice().sort((a: number, b: number) => a - b)[Math.floor(input.length / 2)];
}

console.log("a: " + day7a());
