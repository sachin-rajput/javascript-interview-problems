import twoSum from "../TwoSum";

describe("TwoSum", () => {
  it("should find the target for twosum.", () => {
    const input1 = [2, 7, 11, 15];

    expect(twoSum(input1, 9)).toEqual([0, 1]);

    expect(twoSum(input1, 19)).toEqual([]);
  });
});
