import * as fs from "fs";

const input = fs.readFileSync("./input/day8.txt", "utf-8").trim();
const lines = input.split("\n");

class Entry {
  signals: string[];
  output: string[];
  outputCount: number;

  constructor(input: string) {
    const [_signals, _output] = input.trim().split(" | ");
    this.signals = _signals.trim().split(" ");
    this.output = _output.trim().split(" ");

    this.outputCount = this.count(2) + this.count(4) + this.count(3) + this.count(7);
  }

  count = (length: number): number => {
    return this.output.filter((signal: string) => signal.length === length).length;
  }
}

function day8a(): number {
  const entries: Entry[] = lines.map((line: string) => new Entry(line));

  return entries.map((entry: Entry) => entry.outputCount).reduce((prev: number, count: number) => prev + count);
}

console.log("a: " + day8a());
