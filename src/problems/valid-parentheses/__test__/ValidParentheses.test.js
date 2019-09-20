import isValidParentheses from "../ValidParentheses";

describe("ValidParentheses", () => {
  it("should return true for valid parentheses.", () => {
    const input1 = "()";
    const input2 = "()[]{}";
    const input3 = "{[]}";

    expect(isValidParentheses(input1)).toBeTruthy();
    expect(isValidParentheses(input2)).toBeTruthy();
    expect(isValidParentheses(input3)).toBeTruthy();
  });

  it("should return false for invalid parentheses.", () => {
    const input1 = "(]";
    const input2 = "([)]";

    expect(isValidParentheses(input1)).toBeFalsy();
    expect(isValidParentheses(input2)).toBeFalsy();
  });
});
