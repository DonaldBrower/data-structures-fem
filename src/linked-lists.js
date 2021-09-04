"use strict";

module.exports = { LinkedList };

function LinkedList() {
  this._storage = {};
  this.head = null;
  this.tail = null;
}

function LinkedListNode(v, next = null) {
  this.val = v;
  this.next = next;
}

//*********************************
LinkedList.prototype.insertEnd = function insertEnd(v) {
  if (this.head === null) {
    this._storage[0] = new LinkedListNode(v);
    (this.head = 0), (this.tail = 0);
  } else {
    this._storage[this.tail + 1] = new LinkedListNode(v);
    this._storage[this.tail].next = this._storage[this.tail + 1];
    this.tail++;
  }
};

LinkedList.prototype.removeFromEnd = function removeFromEnd() {
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
};

LinkedList.prototype.removeAfter = function removeAfter(v, i) {};

LinkedList.prototype.insertAtBeginning = function insertAtBeginning(v) {};

LinkedList.prototype.removeFromBeginning = function removeFromBeginning(v) {};

LinkedList.prototype.insertAtEnd = function insertAtEnd(v) {};
