/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "[") stack.push(i);
    else if (s[i] === "]") {
      let start = stack.pop();
      if (stack.length === 0) {
        const nestStr = decodeString(s.substring(start + 1, i));
        const suffix = s.substring(i + 1);
        const end = start;
        while (start > 0 && s[start - 1] >= "0" && s[start - 1] <= "9") start -= 1;
        // eslint-disable-next-line radix
        const num = parseInt(s.substring(start, end));
        const prefix = s.substring(0, start);
        const extendStr = nestStr.repeat(num);
        const temp = prefix + extendStr + suffix;
        i += temp.length - s.length;
        // eslint-disable-next-line no-param-reassign
        s = temp;
      }
    }
  }

  return s;
};

export default decodeString;
