/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const mergeTwoLists = (nums1, m, nums2, n) => {
  let len = nums1.length - 1;
  m -= 1;
  n -= 1;

  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[len] = nums1[m];
      m -= 1;
    } else {
      nums1[len] = nums2[n];
      n -= 1;
    }
    len -= 1;
  }
};

export default mergeTwoLists;
