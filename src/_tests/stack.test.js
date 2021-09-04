"use strict";

var { Stack } = require("../stack.js");

test("that an item can be added to the stack", () => {
  var stack = new Stack();
  stack.push("goat");
  expect(stack._storage[0]).toEqual("goat");
  expect(stack.top).toEqual(0);

  stack.push("llama");
  expect(stack._storage[1]).toEqual("llama");
  expect(stack.top).toEqual(1);
});

test("The pop function works as expected when popping basic data types", () => {
  var stack = new Stack();
  stack.push("goat");
  stack.push("llama");
  expect(stack.pop()).toEqual("llama");
  expect(stack.pop()).toEqual("goat");
  expect(stack.pop()).toEqual(null);
  expect(stack.pop()).toEqual(null);
  expect(stack._storage).toStrictEqual({});
});

test("The peek function works as expected", () => {
  var stack = new Stack();
  stack.push("goat");
  stack.push("llama");
  expect(stack.peek()).toEqual("llama");
  expect(stack.peek()).toEqual("llama");
  stack.pop();
  expect(stack.peek()).toEqual("goat");
});
