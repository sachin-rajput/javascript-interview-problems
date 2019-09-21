import threeSum from "../ThreeSum";

describe("ThreeSum", () => {
  it("should return 3 numbers which sum to 0.", () => {
    const input1 = [-1, 0, 1, 2, -1, -4];

    expect(threeSum(input1)).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });
});
