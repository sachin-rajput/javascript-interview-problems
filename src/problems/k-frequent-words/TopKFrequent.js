/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
  if (words.length === 0) return null;
  const map = new Map();

  for (let i = 0; i < words.length; i += 1) {
    map.set(words[i], (map.get(words[i]) || 0) + 1);
  }

  const result = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const key of map.keys()) {
    result.push([key, map.get(key)]);
  }

  result.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] > b[0] ? 1 : -1;
    }

    return b[1] - a[1];
  });

  let i = 1;

  while (i < k) {
    i += 1;
  }

  return result.slice(0, 1).map((v) => {
    return v[0];
  });
};

export default topKFrequent;
