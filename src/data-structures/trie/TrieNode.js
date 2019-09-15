import HashTable from "../hash-table/HashTable";

/**
 * TrieNode - data structure for implementing Trie
 *
 */
export default class TrieNode {
  /**
   *
   * @param {*} character
   * @param {*} isCompleteWord
   */
  constructor(character, isCompleteWord = false) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.children = new HashTable();
  }

  /**
   * Get the list of children nodes it has
   *
   * @param {string} character
   * @returns {TrieNode} - TrieNode
   */
  getChild(character) {
    return this.children.get(character);
  }

  /**
   * Add a character as a child to a TrieNode
   *
   * @param {string} character
   * @param {boolean} isCompleteWord
   * @returns {TrieNode} - TrieNode
   */
  addChild(character, isCompleteWord = false) {
    // Let's add the character if it does not exist
    if (!this.children.get(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord));
    }

    const childNode = this.children.get(character);

    // In case of words like 'car' getting added after carpet existing,
    // we need to make sure we mark 'r' as completed word
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;

    return childNode;
  }

  /**
   * Delete a character from the Trie
   *
   * @param {string} character
   * @returns {TrieNode} - Returns the TrieNode
   */
  removeChild(character) {
    const childNode = this.getChild(character);

    // if childNode exists, and it does not have a complete word flag
    // and does not have any children then we can remove it
    if (childNode && !childNode.hasChildren() && !childNode.isCompleteWord) {
      this.children.delete(character);
    }

    return this;
  }

  /**
   * Check if current character has a child character
   *
   * @param {string} character
   * @returns {boolean}
   */
  hasChild(character) {
    return this.children.has(character);
  }

  /**
   * Check if current character has child nodes / characters
   *
   * @returns {boolean}
   */
  hasChildren() {
    return this.children.getKeys().length > 0;
  }

  /**
   * Get all child characters for current character
   */
  suggestChildren() {
    return [...this.children.getKeys()];
  }

  toString() {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : "";
    const isCompleteString = this.isCompleteWord ? "*" : "";

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}
