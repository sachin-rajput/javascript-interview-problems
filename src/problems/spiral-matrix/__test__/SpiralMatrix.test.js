import spiralOrder from "../SpiralMatrix";

describe("SpiralMatrix", () => {
  it("should print matrix in spiral form.", () => {
    const input1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(spiralOrder(input1)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

    const input2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    expect(spiralOrder(input2)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  it("should print matrix in spiral form.", () => {
    const input1 = [];
    expect(spiralOrder(input1)).toEqual([]);
  });
});
