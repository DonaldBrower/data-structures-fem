"use strict";

module.exports = { LinkedList };

function LinkedList() {
  this._storage = {};
  this.head = null;
  this.tail = null;
}
LinkedList.prototype.insert = insert;
LinkedList.prototype.remove = remove;
LinkedList.prototype.contains = contains;
LinkedList.prototype.getFirstInstanceOfNode = getFirstInstanceOfNode;

function LinkedListNode(v, next = null) {
  this.val = v;
  this.next = next;
}

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

function remove() {
  if (this.head === null) {
    return null;
  } else {
    return recurse(this.storage[this.head]);
  }
  //**************
  var prevNode;
  function recurse(node) {
    if (node.next === null) {
      // then this is our node
      if (!prevNode) {
        // then this is a list with only one node
        //
        node.next = null;
      } else {
        prevNode = node;
        recurse(node.next);
      }
    }
  }
}

function contains(v, r) {
  return recurse(this._storage[this.head]);
  function recurse(node) {
    if (node.val === v) {
      return true;
    } else if (node.next !== null) {
      return recurse(node.next);
    } else return false;
  }
}

function getFirstInstanceOfNode(v) {
  return recurse(this._storage[this.head]);
  function recurse(node) {
    if (node.val === v) {
      return node;
    } else if (node.next !== null) {
      return recurse(node.next);
    } else return false;
  }
}
