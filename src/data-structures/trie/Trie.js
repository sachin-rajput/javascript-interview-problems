import TrieNode from "./TrieNode";

const HEAD_CHARACTER = "*";

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  /**
   * Add word to the trie
   *
   * @param {*} word
   */
  addWord(word) {
    const characters = Array.from(word);

    let currentNode = this.head;

    for (let index = 0; index < characters.length; index += 1) {
      const isCompleteWord = index === characters.length - 1;
      currentNode = currentNode.addChild(characters[index], isCompleteWord);
    }

    return this;
  }

  /**
   * Delete the word from the trie
   *
   * @param {*} word
   */
  deleteWord(word) {
    const deleteDepthFirst = (currentNode, charIndex = 0) => {
      if (charIndex >= word.length) {
        // return if the index is out of the word length scope
        return;
      }

      const character = word[charIndex];
      const nextNode = currentNode.getChild(character);

      // if there are no children then return
      if (nextNode === null) {
        return;
      }

      // Go deeper
      deleteDepthFirst(nextNode, charIndex + 1);

      if (charIndex === word.length - 1) {
        nextNode.isCompleteWord = false;
      }

      currentNode.removeChild(character);
    };

    deleteDepthFirst(this.head);

    return this;
  }

  /**
   * Suggest next characters for the given word
   *
   * @param {*} word
   */
  suggestNextCharacters(word) {
    const lastCharacter = this.getLastCharacterNode(word);

    if (!lastCharacter) {
      return null;
    }

    return lastCharacter.suggestChildren();
  }

  /**
   * Check if the word exists in the trie
   *
   * @param {*} word
   */
  doesWordExist(word) {
    const lastCharacter = this.getLastCharacterNode(word);

    return !!lastCharacter && lastCharacter.isCompleteWord;
  }

  /**
   * Get Children Node
   *
   * @param {*} word
   */
  getLastCharacterNode(word) {
    const characters = Array.from(word);
    let currentNode = this.head;

    for (let index = 0; index < characters.length; index += 1) {
      if (!currentNode.hasChild(characters[index])) {
        return null;
      }

      currentNode = currentNode.getChild(characters[index]);
    }

    return currentNode;
  }
}
