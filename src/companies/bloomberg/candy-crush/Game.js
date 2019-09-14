export default class Game {
  constructor(name, board = null) {
    this.name = name;
    this.board = board;
  }

  play() {
    throw new Error("Please implement this in the game you create!");
  }
}
