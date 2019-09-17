function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;

  this.toString = (id = 1) => {
    const idStr = `"$id":"${id}"`;
    // eslint-disable-next-line quotes
    const nextStr = this.next ? `"next":${this.next.toString(id + 1)}` : '"next":null';
    // eslint-disable-next-line quotes
    const randomStr = this.random ? `"random":{"$ref":"${this.random.val}"}` : '"random": null';

    const valStr = `"val":${this.val}`;

    return `{${idStr},${nextStr},${randomStr},${valStr}}`;
  };
}

/* Terminology ------------
 * 1) head represents the head of the original_head. It is never modified.
 * 2) clonedHead represents the head of the cloned linked list. It is never altered once set.
 * 3) oldHead represents a reference to the the head of the original linked list.
 *    It is used for traversing the original list (and hence mutable).
 * 4) newHead represents a reference to the head of the cloned linked list.
 *    It is used for traversing the cloned linked list (and hence mutable).
 */

/**
 * Returns a deep copy of the list using constant space
 *
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  // Handle the base case
  if (!head) return head;

  let weavedHead;
  let backup;
  weavedHead = head;

  while (weavedHead) {
    backup = weavedHead.next;

    weavedHead.next = new Node(weavedHead.val, backup, null);

    weavedHead = backup;
  }

  const clonedHead = head.next;

  weavedHead = head;

  while (weavedHead) {
    weavedHead.next.random = weavedHead.random ? weavedHead.random.next : null;

    weavedHead = weavedHead.next.next;
  }

  weavedHead = head;

  while (weavedHead) {
    backup = weavedHead.next;

    weavedHead.next = weavedHead.next ? weavedHead.next.next : null;

    weavedHead = backup;
  }

  return clonedHead;
}

export { Node, copyRandomList };
