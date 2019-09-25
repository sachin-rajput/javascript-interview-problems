/* eslint-disable no-param-reassign */
/**
 * // Definition for a Node.
 */

function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = (head) => {
  if (head == null) return head;

  let curr = head;

  while (curr != null) {
    if (curr.child == null) {
      curr = curr.next;
      // eslint-disable-next-line no-continue
      continue;
    }

    let temp = curr.child;

    while (temp.next != null) {
      temp = temp.next;
    }

    temp.next = curr.next;
    if (curr.next != null) curr.next.prev = temp;

    curr.next = curr.child;
    curr.child.prev = curr;
    curr.child = null;
    curr = curr.next;
  }

  return head;
};

export { Node, flatten };
