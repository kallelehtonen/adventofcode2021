import * as fs from "fs";

const input = fs.readFileSync("./input/day9.txt", "utf-8").trim();
const lines: string[] = input.trim().split("\n");

function day9a(): number {
  const rows: number[][] = lines.map((line: string) => Array.from(line).map(Number));
  const lowpoints: number[] = [];

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      const neighbors: number[] = [];

      if (i - 1 >= 0) {
        neighbors.push(rows[i - 1][j]);
      }

      if (j + 1 < rows[i].length) {
        neighbors.push(rows[i][j + 1]);
      }

      if (i + 1 < rows.length) {
        neighbors.push(rows[i + 1][j]);
      }

      if (j - 1 >= 0) {
        neighbors.push(rows[i][j - 1]);
      }

      if (rows[i][j] < Math.min(...neighbors)) {
        lowpoints.push(rows[i][j] + 1);
      }
    }
  }

  return lowpoints.reduce((sum: number, point: number) => sum + point);
}

console.log("a: " + day9a());
