/**
 *
 * @param {*} a
 * @param {*} b
 */
const oneM = (a, b) => {
  let count = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      count += 1;
    }
  }
  return count === 1;
};

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = (start, end, bank) => {
  // create a set to store unique gene combinations
  // from the bank
  const set = new Set(bank);

  if (!set.has(end)) return -1;

  // create visited set to store
  // all mutations encountered
  const visited = new Set();
  visited.add(start);

  // create q to store unvisited mutations
  const q = [];
  q.push(start);

  let count = 1;
  while (q.length !== 0) {
    const size = q.length;

    for (let i = 0; i < size; i += 1) {
      const a = q.shift();
      if (oneM(a, end)) return count;
      set.forEach((b) => {
        if (!visited.has(b) && oneM(a, b)) {
          q.push(b);
          visited.add(b);
        }
      });
    }

    count += 1;
  }

  return -1;
};

// const start = "AACCGGTT";
// const end = "AAACGGTA";
// const bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"];

// console.log(minMutation(start, end, bank));

export default minMutation;
