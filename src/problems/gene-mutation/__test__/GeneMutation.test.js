import minMutation from "../GeneMutation";

describe("GeneMutation.", () => {
  it("should return the minimum mutations needed to reach the end state.", () => {
    const start = "AACCGGTT";
    const end = "AAACGGTA";
    const bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"];

    expect(minMutation(start, end, bank)).toBe(2);
  });
});
