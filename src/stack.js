"use strict";

module.exports = { Stack };

function Stack() {
  this._storage = {};
  this.top = null;
}

// add new value at the end of the stack. O(1)
Stack.prototype.push = function push(v) {
  if (this.top === null) {
    this.top = 0;
  } else {
    this.top++;
  }

  this._storage[this.top] = v;
};

// removes the value at the end of the stack and returns it. O(1)
Stack.prototype.pop = function pop() {
  if (this.top === null) {
    return null;
  }

  var poppedEl = this._storage[this.top];

  delete this._storage[this.top];

  if (this.top == 0) {
    this.top = null;
  } else if (this.top > 0) {
    this.top--;
  }

  return poppedEl;
};

// returns the value at the end of the stack without removing it. O(1)
Stack.prototype.peek = function peek() {
  if (this.top === null) {
    return null;
  }

  return this._storage[this.top];
};
