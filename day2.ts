import * as fs from "fs";

const input = fs.readFileSync("./input/day2.txt", "utf-8");
const inputArray: string[] = input.split("\n");

function day2a(): number {
  let position = 0;
  let depth = 0;

  inputArray.forEach((line: string) => {
    const [direction, value] = line.split(" ");

    switch (direction) {
      case "forward":
        position = position + +value;
        break;

      case "up":
        depth = depth - +value;
        break;

      case "down":
        depth = depth + +value;
        break;
    }
  });

  return position * depth;
}

function day2b(): number {
  let position = 0;
  let depth = 0;
  let aim = 0;

  inputArray.forEach((line: string) => {
    const [direction, value] = line.split(" ");

    switch (direction) {
      case "forward":
        position = position + +value;
        depth = depth + aim * +value;
        break;

      case "up":
        aim = aim - +value;
        break;

      case "down":
        aim = aim + +value;
        break;
    }
  });

  return position * depth;
}

console.log("a: " + day2a());
console.log("b: " + day2b());
