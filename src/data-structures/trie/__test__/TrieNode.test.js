import TrieNode from "../TrieNode";

describe("TrieNode", () => {
  it("should create an instance of the TrieNode.", () => {
    const node = new TrieNode("*");

    expect(node).toBeDefined();
  });

  it("should add characters as child to the trie node.", () => {
    const node = new TrieNode("*");
    node
      .addChild("c")
      .addChild("a")
      .addChild("r", true);

    expect(node.getChild("c").toString()).toBe("c:a");
    expect(
      node
        .getChild("c")
        .getChild("a")
        .toString()
    ).toBe("a:r");

    expect(
      node
        .getChild("c")
        .getChild("a")
        .getChild("r")
        .toString()
    ).toBe("r*");
  });

  it("should remove a character from the trie.", () => {
    const node = new TrieNode("*");
    node
      .addChild("c")
      .addChild("a")
      .addChild("r", true);

    node.addChild("t");

    expect(node.toString()).toBe("*:c,t");

    node.removeChild("c");

    expect(node.getChild("c").toString()).toBe("c:a");

    node.removeChild("t");

    expect(node.toString()).toBe("*:c");
  });

  it("should check if has child character.", () => {
    const node = new TrieNode("*");

    node
      .addChild("c")
      .addChild("a")
      .addChild("r", true);

    expect(node.getChild("c").hasChild("a")).toBeTruthy();
    expect(node.getChild("c").hasChild("g")).toBeFalsy();
  });
});
