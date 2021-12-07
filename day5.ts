import * as fs from "fs";

const input = fs.readFileSync("./input/day5.txt", "utf-8").trim();
const lines = input.split("\n");

enum Direction {
  horizontal,
  vertical,
  diagonal,
}

class VentLine {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  direction: Direction = Direction.diagonal;
  length: number;

  constructor(input: string) {
    const [a, b] = input.trim().split(" -> ");
    [this.x1, this.y1] = a.trim().split(",").map(Number);
    [this.x2, this.y2] = b.trim().split(",").map(Number);

    if (this.x1 === this.x2) {
      this.direction = Direction.vertical;
    }

    if (this.y1 === this.y2) {
      this.direction = Direction.horizontal;
    }

    switch (this.direction) {
      case Direction.vertical:
        this.length = Math.abs(this.y1 - this.y2);
        break;

      case Direction.horizontal:
        this.length = Math.abs(this.x1 - this.x2);
        break;

      case Direction.diagonal:
        this.length = (Math.abs(this.x1 - this.x2) + Math.abs(this.y1 - this.y2)) / 2;
        break;
    }
  }
}

function day5a(): number {
  const ventLines: VentLine[] = lines.map((line: string) => new VentLine(line));
  const coordsCount: Map<string, number> = new Map<string, number>();

  for (const ventLine of ventLines) {
    if (ventLine.direction === Direction.vertical) {
      for (let i = 0; i <= ventLine.length; i++) {
        addCount(coordsCount, ventLine.x1, Math.min(ventLine.y1, ventLine.y2) + i);
      }
    }

    if (ventLine.direction === Direction.horizontal) {
      for (let i = 0; i <= ventLine.length; i++) {
        addCount(coordsCount, Math.min(ventLine.x1, ventLine.x2) + i, ventLine.y1);
      }
    }
  }

  return Array.from(coordsCount.values()).filter((count: number) => count > 1).length;
}

function addCount(map: Map<string, number>, a: number, b: number): void {
  map.set(`${a},${b}`, (map.get(`${a},${b}`) || 0) + 1);
}

console.log("a: " + day5a());
