export default class Game {
  constructor(name, board = null) {
    if (new.target === Game) {
      throw new Error("Cannot create a Game instance.");
    }

    this.name = name;
    this.board = board;
  }

  /* istanbul ignore next */
  play() {
    throw new Error("Please implement this in the game you create!");
  }
}
