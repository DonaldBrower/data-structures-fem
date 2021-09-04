"use strict";

module.exports = { LinkedList };

function LinkedList() {
  this._storage = {};
  this.head = null;
  this.tail = null;
}
LinkedList.prototype.insert = insert;
LinkedList.prototype.remove = remove;
LinkedList.prototype.search = search;
LinkedList.prototype.get = get;

//**********************************
function insert(v) {
  /**
   *
   */
  if (this.head === null) {
    // when the head is null it's assumed the storage is empty. start from zero.
    this._storage[0] = { val: v, next: null };
    (this.head = 0), (this.tail = 0);
  } else {
    // create a new node in storage
    this._storage[this.tail + 1] = { val: v, next: null };

    // assign the new node to the old tail's `next` property
    this._storage[this.tail].next = this._storage[this.tail + 1];

    // point to the new tail
    this.tail++;
  }
}

function remove(node) {
  /**
   * pass in the node that contains target node as it's next property, so
   * remove can delete the node and correct the pointers
   *
   * {
   *   val: "dont delete me",
   *   next: {
   *     val: "delete me",
   *     ...
   *   }
   * }
   */

  var next = { ...node.next.next };
  var output = { val: node.next.val, next: null };
  delete node.next;
  console.log("node");
  console.log(node);
  console.log("this.storage");
  console.log(this._storage[node]);
  node.next = { ...next };
  return output;
}

function search(v, r) {
  /**
   *
   */
  return recurse(this._storage[this.head]);

  //******
  function recurse(node) {
    if (node.val === v) {
      return true;
    } else if (node.next !== null) {
      return recurse(node.next);
    } else return false;
  }
}

function get(v) {
  /**
   *
   */
  return recurse(this._storage[this.head]);

  //******
  function recurse(node) {
    if (node.next.val === v) {
      return node;
    } else if (node.next !== null) {
      return recurse(node.next);
    } else return false;
  }
}
