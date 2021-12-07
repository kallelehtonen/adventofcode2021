import * as fs from "fs";

const input = fs.readFileSync("./input/example.txt", "utf-8").trim();
const lines = input.split("\n");

function day5a(): number {
  const ventLines: string[] = [...lines];
  const coordsCount: Map<string, number> = new Map<string, number>();

  for (const ventLine of ventLines) {
    const [a, b] = ventLine.trim().split(" -> ");
    const [x1, y1] = a.trim().split(",").map(Number);
    const [x2, y2] = b.trim().split(",").map(Number);

    // vertical
    if (x1 === x2) {
      const length = Math.abs(y1 - y2);

      for (let i = 0; i <= length; i++) {
        addCount(coordsCount, x1, Math.min(y1, y2) + i);
      }
    }

    // horizontal
    if (y1 === y2) {
      const length = Math.abs(x1 - x2);

      for (let i = 0; i <= length; i++) {
        addCount(coordsCount, Math.min(x1, x2) + i, y1);
      }
    }
  }

  return Array.from(coordsCount.values()).filter((count: number) => count > 1).length;
}

function addCount(map: Map<string, number>, a: number, b: number): void {
  map.set(`${a},${b}`, (map.get(`${a},${b}`) || 0) + 1);
}

console.log("a: " + day5a());
