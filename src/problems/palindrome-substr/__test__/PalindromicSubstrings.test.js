import { countSubStrings } from "../PalindromicSubstrings";

describe("PalindromicSubstrings", () => {
  it("should return the number of palindrome substrings.", () => {
    const s1 = "abc";
    const s2 = "aaa";
    const s3 = "aaabab";

    expect(countSubStrings(s1)).toEqual(3);
    expect(countSubStrings(s2)).toEqual(6);
    expect(countSubStrings(s3)).toEqual(11);
  });
});
