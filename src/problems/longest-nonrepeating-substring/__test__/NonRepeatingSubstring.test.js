import lengthOfLongestSubstring from "../NonRepeatingSubstring";

describe("Longest Substring Without Repeating Characters", () => {
  it("should return 0 if string is blank or undefined", () => {
    const input1 = "";
    const input2 = undefined;
    const input3 = null;

    expect(lengthOfLongestSubstring(input1)).toBe(0);
    expect(lengthOfLongestSubstring(input2)).toBe(0);
    expect(lengthOfLongestSubstring(input3)).toBe(0);
  });

  it("should return longest without repeating substring.", () => {
    const input1 = "abcabcbb";
    const input2 = "bbbb";
    const input3 = "pwwkew";
    const input4 = "dvdf";

    expect(lengthOfLongestSubstring(input1)).toBe(3);
    expect(lengthOfLongestSubstring(input2)).toBe(1);
    expect(lengthOfLongestSubstring(input3)).toBe(3);
    expect(lengthOfLongestSubstring(input4)).toBe(3);
  });

  it("should return length for spcl char also.", () => {
    const input1 = " ";
    const input2 = "   ";
    const input3 = "#$%gtttt";

    expect(lengthOfLongestSubstring(input1)).toBe(1);
    expect(lengthOfLongestSubstring(input2)).toBe(1);
    expect(lengthOfLongestSubstring(input3)).toBe(5);
  });
});
