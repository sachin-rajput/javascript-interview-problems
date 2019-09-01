import LinkedList from "../linked-list/LinkedList";

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

export default class HashTable {
  /**
   *
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    /**
     * Create hash table of certain size and fill each bucket with empty linked list
     * @var {[LinkedList]}
     * */
    this.bucket = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }

  /**
   * Returns a hash key to assign to a bucket with that key
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    // For simplicity let's implement an easier hash function
    const hash = Array.from(key).reduce((hAccum, keySym) => hAccum + keySym.charCodeAt(0), 0);

    // let's make sure the hash is within the bucket length (1-length)
    return hash % this.bucket.length;
  }

  /**
   * add item in the hash table
   * @param {string} key
   * @param {*} value
   * @return {LinkedListNode} Bucket[list]
   */
  set(key, value) {
    // create keyhash for the given key
    const keyhash = this.hash(key);

    // let's save this keyhash in our key's list for faster access
    this.keys[key] = keyhash;

    // let's retrieve the list from the bucket
    const bucketLinkedList = this.bucket[keyhash];

    // search if the key exist in our list
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    // if it does not exist then we append new one
    if (!node) {
      // Insert new node
      bucketLinkedList.append({ key, value });
    } else {
      // key exist, just update the value
      node.value.value = value;
    }
    return bucketLinkedList;
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * Returns the list from the bucket after deleting by key
   *
   * @param {string} key
   * @return {LinkedListNode} Bucket[list]
   */
  delete(key) {
    if (!this.has(key)) return null;

    const keyhash = this.keys[key];
    delete this.keys[key];

    // let's retrieve the list from the bucket
    const bucketLinkedList = this.bucket[keyhash];

    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    // delete all entries with this key in our list
    return bucketLinkedList.deleteAll(node.value);
  }

  /**
   * Returns the value of the item if present
   *
   * @param {string} key
   * @return {*}
   */
  get(key) {
    if (!this.has(key)) return null;

    const bucketLinkedList = this.bucket[this.keys[key]];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    return node ? node.value.value : null;
  }

  /**
   * Get all the keys from the hash table
   *
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }
}
