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

Queue.prototype.dequeue = function dequeue() {};
