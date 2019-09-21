/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] > 0) break;
    // eslint-disable-next-line no-continue
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (s < 0) left += 1;
      else if (s > 0) right -= 1;
      else {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right - 1]) right -= 1;
        left += 1;
        right -= 1;
      }
    }
  }

  return result;
};

export default threeSum;
