import Game from "../Game";

describe("Game", () => {
  it("should not create an instance", () => {
    const gameInstance = () => {
      const instance = new Game();
      instance.play();
    };

    expect(gameInstance).toThrow();
  });
});
