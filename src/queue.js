"use strict";

module.exports = { Queue };

function Queue() {
  this._storage = {};
  this.front = null;
  this.back = null;
}

Queue.prototype.enqueue = function enqueue(v) {
  if (this.front === null) {
    (this.front = 0), (this.back = 0);
    this._storage[this.back] = v;
  } else {
    this.back++;
    this._storage[this.back] = v;
  }
};

Queue.prototype.dequeue = function dequeue() {
  if (this.front === null && this.back === null) {
    return null;
  }

  var dequeuedEl;
  if (this.front - this.back < 0) {
    dequeuedEl = this._storage[this.front];
    delete this._storage[this.front];

    this.front++;
  } else {
    dequeuedEl = this._storage[this.front];
    delete this._storage[this.front];

    (this.front = null), (this.back = null);
  }

  return dequeuedEl;
};
