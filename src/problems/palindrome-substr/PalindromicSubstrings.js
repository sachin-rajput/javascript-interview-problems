/* eslint-disable no-param-reassign */
const countPalidrome = (s, l, r) => {
  let count = 0;

  while (l >= 0 && r < s.length) {
    if (s[l] === s[r]) {
      count += 1;
      l -= 1;
      r += 1;
    } else break;
  }

  return count;
};

const countSubStrings = (s) => {
  // base case if s is null return 0
  if (!s) return 0;

  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    // let's count palindromes from odd index position
    count += countPalidrome(s, i, i);

    // let's count palidromes from even posistions
    count += countPalidrome(s, i, i + 1);
  }

  return count;
};

export { countSubStrings, countPalidrome };
