const isValidParentheses = (s) => {
  if (!s) return true;

  const map = {
    "]": "[",
    "}": "{",
    ")": "("
  };

  const open = "[{(";

  const vStack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (open.includes(s[i])) {
      vStack.push(s[i]);
    } else {
      if (vStack.pop() !== map[s[i]]) {
        return false;
      }
    }
  }

  return vStack.length === 0;
};

export default isValidParentheses;
