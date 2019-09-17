// Given a string, find the length of the longest substring without repeating characters.

/**
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (!s) return 0;
  if (s.length <= 1) return s.length;

  const lookup = new Map();
  const len = s.length;

  let max = 0;
  let start = 0;
  let c;

  for (let i = 0; i < len; i += 1) {
    c = s.charAt(i);

    if (lookup.has(c) && lookup.get(c) >= start) {
      start = lookup.get(c) + 1;
    }

    lookup.set(c, i);

    max = Math.max(max, i - start + 1);
  }

  return max;
};

export default lengthOfLongestSubstring;
