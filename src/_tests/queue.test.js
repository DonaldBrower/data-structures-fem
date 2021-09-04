"use strict";

var { Queue } = require("../queue.js");

test("an item can be queued up", () => {
  var queue = new Queue();
  queue.enqueue("goat");
  expect(queue._storage[0]).toEqual("goat");
  expect(queue.front).toEqual(0);
  expect(queue.back).toEqual(0);

  queue.enqueue("llama");
  expect(queue._storage[1]).toEqual("llama");
  expect(queue.front).toEqual(0);
  expect(queue.back).toEqual(1);
});
