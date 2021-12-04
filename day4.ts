import * as fs from "fs";

const input = fs.readFileSync("./input/day4.txt", "utf-8").trim();
const [ numbers, ...boards ] = input.split("\n\r");
const numberArray: string[] = numbers.trim().split(",");

function day4a(): number {
  let winnerUnmarkedSum = 0;
  let lastDrawnNumber = "";
  const rowCounts = new Map<string, number>();
  const colCounts = new Map<string, number>();
  const boardSums = new Map<number, number>();
  let gameWon = false;
  let initRun = true;

  gameLoop:
  while (!gameWon) {
    lastDrawnNumber = drawNumber();

    for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
      const rows: string[] = boards[boardIndex].trim().split("\n");

      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const rowNumbers: string[] = rows[rowIndex].trim().split(" ");

        if (initRun) {
          boardSums.set(boardIndex, (boardSums.get(boardIndex) || 0) + rowNumbers.map(Number).reduce((accumulator, curr) => accumulator + curr));
        }

        for (let colIndex = 0; colIndex < rowNumbers.length; colIndex++) {
          if (lastDrawnNumber === rowNumbers[colIndex]) {
            updateCount(rowCounts, boardIndex, rowIndex);
            updateCount(colCounts, boardIndex, colIndex);

            boardSums.set(boardIndex, (boardSums.get(boardIndex) || 0) - +lastDrawnNumber);

            if (checkStatus(rowCounts, boardIndex, rowIndex) || checkStatus(colCounts, boardIndex, colIndex)) {
              winnerUnmarkedSum = boardSums.get(+boardIndex) || 0;
              gameWon = true;
              break gameLoop;
            }
          }
        }
      }
    }

    initRun = false;
  }

  return winnerUnmarkedSum * +lastDrawnNumber;
}

function drawNumber(): string {
  // @ts-ignore
  return numberArray.shift();
}

function updateCount(map: Map<string, number>, board: number, index: number): void {
  const key = `${board}.${index}`;

  map.set(key, (map.get(key) || 0) + 1);
}

function checkStatus(map: Map<string, number>, board: number, index: number): boolean {
  const key = `${board}.${index}`;

  return map.get(key) === 5;
}

console.log("a: " + day4a());
