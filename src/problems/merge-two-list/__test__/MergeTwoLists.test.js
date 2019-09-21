import mergeTwoLists from "../MergeTwoLists";

describe("MergeTwoList", () => {
  it("should merge two sorted lists.", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];

    mergeTwoLists(nums1, 3, nums2, 3);

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
