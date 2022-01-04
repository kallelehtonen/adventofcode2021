const framesInput = [
  [8, 0],
  [7, 0],
  [5, 3],
  [9, 1],
  [9, 1],
  [10],
  [8, 0],
  [5, 1],
  [3, 7],
  [9, 0, 0]
];

class BowlingFrame {
  throws: number[] = [];

  constructor(input: number[]) {
    this.throws = input;
  }
}

class BowlingGame {
  frames: BowlingFrame[] = [];
  score: number = 0;

  constructor() {
    this.frames = framesInput.map((input) => new BowlingFrame(input));
  }

  /*
   * Simulates a throw of a ball which knocks down 0-10 pins.
   *
   * @param knockedDownPins: Number of knocked down pins (0-10).
   * @returns: Player's score after the throw.
   */
  throwBall(knockedDownPins: number) {
    return this.score += knockedDownPins;
  }

  // @ts-ignore
  getFrameScore(index: number): number {
    const frameScore = this.frames[index].throws.reduce((acc, curr) => acc + curr);
    const flattenThrows = framesInput.slice(index + 1).flat();
    // console.log(index, frameScore, flattenThrows);

    if (frameScore < 10) {
      return frameScore;
    }

    if (this.frames[index].throws[0] === 10) {
      return frameScore + flattenThrows[0] + flattenThrows[1];
    }

    if (frameScore === 10) {
      return frameScore + flattenThrows[0];
    }
  }

  calculateScore(): void {
    let currentScore = 0;

    this.frames.forEach((frame: BowlingFrame, index: number) => {
      // console.log(this.getFrameScore(index));
      currentScore += this.getFrameScore(index);
      console.log(currentScore);

      frame.throws.forEach((throww: number) => {
        this.throwBall(throww);
      });
    });
  }
}

const game = new BowlingGame();
game.calculateScore();
