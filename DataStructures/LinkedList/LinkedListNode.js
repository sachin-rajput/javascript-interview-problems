/**
 * Base Node Object for Linked List
 * @param {Any} value
 * @param {LinkedListNode} next
 */
function LinkedListNode(value, next = null) {
  this.value = value;
  this.next = next;
}

LinkedListNode.prototype.toString = function(callback) {
  return callback ? callback(this.value) : `${this.value}`;
};

export default LinkedListNode;
