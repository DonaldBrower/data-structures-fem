"use strict";

var { LinkedList } = require("../linked-lists.js");

test("nodes can be added to the linked list", () => {
  var ll = new LinkedList();

  ll.insertEnd("aaaah");

  expect(ll._storage[0]).toEqual({
    next: null,
    val: "aaaah",
  });

  expect(ll.head).toEqual(0);

  ll.insertEnd("beee");

  expect(ll._storage).toEqual({
    0: {
      val: "aaaah",
      next: {
        val: "beee",
        next: null,
      },
    },
    1: {
      val: "beee",
      next: null,
    },
  });

  expect(ll.head).toEqual(0);
  expect(ll.tail).toEqual(1);

  ll.insertEnd("I'm feeling like a goose");
  expect(ll._storage).toEqual({
    0: {
      val: "aaaah",
      next: {
        val: "beee",
        next: {
          val: "I'm feeling like a goose",
          next: null,
        },
      },
    },
    1: {
      val: "beee",
      next: {
        val: "I'm feeling like a goose",
        next: null,
      },
    },
    2: {
      val: "I'm feeling like a goose",
      next: null,
    },
  });

  expect(ll.head).toEqual(0);
  expect(ll.tail).toEqual(2);
});

test("LinkedList.removeFromEnd removes the very last element and returns it", () => {
  var ll = new LinkedList();

  ll.insertEnd("aaaah");
  ll.insertEnd("beee");

  expect(ll.removeFromEnd()).toEqual({ val: "beee", next: null });
  expect(ll._storage).toEqual({
    0: {
      val: "aaaah",
      next: null,
    },
  });

  expect(ll.head).toEqual(0);
  expect(ll.tail).toEqual(0);
});
