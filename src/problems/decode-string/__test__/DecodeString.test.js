import decodeString from "../DecodeString";

describe("DecodeString", () => {
  it("should decode a string.", () => {
    const input1 = "3[a]2[b4[f]c]";

    expect(decodeString(input1)).toBe("aaabffffcbffffc");

    const input2 = "3[a]2[bc]";

    expect(decodeString(input2)).toBe("aaabcbc");

    const input3 = "10[a]";

    expect(decodeString(input3)).toBe("aaaaaaaaaa");
  });
});
