import HashTable from "../HashTable";

describe("HashTable", () => {
  it("should create a HashTable", () => {
    const hashTbl = new HashTable();

    expect(hashTbl).toBeDefined();
  });

  it("should create a HashTable and create a hash for a key.", () => {
    const hashTbl = new HashTable();

    expect(hashTbl.hash("a")).toBe(1);
    expect(hashTbl.hash("b")).toBe(2);
    expect(hashTbl.hash("abc")).toBe(6);
  });

  it("should create a HashTable and add items.", () => {
    const hashTbl = new HashTable();

    hashTbl.set("a", "hello");

    expect(hashTbl.bucket[1].head.value.key).toBe("a");
    expect(hashTbl.bucket[1].head.value.value).toBe("hello");

    hashTbl.set("a", "hello2");

    expect(hashTbl.bucket[1].head.value.value).toBe("hello2");
  });

  it("should create a HashTable and delete items.", () => {
    const hashTbl = new HashTable();

    hashTbl.set("a", "hello");
    hashTbl.set("A1", "hello A1");

    expect(hashTbl.bucket[1].head.value.key).toBe("a");
    expect(hashTbl.bucket[1].head.value.value).toBe("hello");

    let bucketList = hashTbl.set("r", "hello r");
    const customStringFn = nodeValue => `${nodeValue.key}:${nodeValue.value}`;

    expect(bucketList.toString({ separator: ",", callback: customStringFn })).toBe("A1:hello A1,r:hello r");

    hashTbl.delete("r");

    expect(bucketList.toString({ separator: ",", callback: customStringFn })).toBe("A1:hello A1");

    bucketList = hashTbl.delete("b");
    expect(bucketList).toBeNull();
    bucketList = hashTbl.delete("b1");
  });

  it("should create a HashTable and get items and keys.", () => {
    const hashTbl = new HashTable();

    hashTbl.set("a", "hello");
    hashTbl.set("A1", "hello A1");

    expect(hashTbl.bucket[1].head.value.key).toBe("a");
    expect(hashTbl.bucket[1].head.value.value).toBe("hello");

    hashTbl.set("r", "hello r");

    let getValue = hashTbl.get("r");

    expect(getValue).toBe("hello r");

    getValue = hashTbl.get("r1");

    expect(getValue).toBeNull();

    const getKeys = hashTbl.getKeys();

    expect(getKeys.length).toBe(3);
    expect(getKeys.toString()).toBe("a,A1,r");
  });
});
