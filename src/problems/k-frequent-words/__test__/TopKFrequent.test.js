import topKFrequent from "../TopKFrequent";

describe("TopKFrequent", () => {
  it("should print top k frequent words.", () => {
    const input = ["i", "love", "leetcode", "i", "love", "coding"];
    const k = 2;

    expect(topKFrequent(input, k).toString()).toBe("i", "love");
  });
});
