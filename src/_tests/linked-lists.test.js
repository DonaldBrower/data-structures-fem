"use strict";

var { LinkedList } = require("../linked-lists.js");

test("nodes can be added to the linked list", () => {
  var ll = new LinkedList();

  ll.insert("aaaah");

  expect(ll._storage[0]).toEqual({
    next: null,
    val: "aaaah",
  });

  expect(ll.head).toEqual(0);

  ll.insert("beee");

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

  ll.insert("I'm feeling like a goose");
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

test("remove method - takes in a reference to a node, removes it from the linked list", () => {
  var ll = new LinkedList();

  ll.insert("aaaah");
  ll.insert("beee");
  ll.insert("ceee3");

  var node = ll.get("beee");

  expect(ll.remove(node)).toEqual({ val: "beee", next: null });
  // console.log(ll._storage);
  expect(ll._storage).toEqual({
    0: {
      val: "aaaah",
      next: {
        val: "ceee3",
        next: null,
      },
    },
    2: {
      val: "ceee3",
      next: null,
    },
  });

  expect(ll.head).toEqual(0);
  expect(ll.tail).toEqual(2);
});

test("remove method takes in a value, searches the linked list for the value, and if it's there, remove and return it", () => {
  var ll = new LinkedList();

  ll.insert("aaaah");
  ll.insert("beee");
  ll.insert("ceeeee");
  var node = ll.get("beee");

  expect(ll.remove(node)).toEqual({ val: "beee", next: null });
  console.log(ll._storage);
  expect(ll._storage).toEqual({
    0: {
      val: "aaaah",
      next: { val: "ceeeee", next: null },
    },
  });

  expect(ll.head).toEqual(0);
  expect(ll.tail).toEqual(0);
});

xtest("removeTail method removes the last node in the linked list", () => {
  var ll = new LinkedList();

  ll.insert("aaaah");
  ll.insert("beee");

  expect(ll.removeTail()).toEqual({ val: "beee", next: null });
  expect(ll._storage).toEqual({
    0: {
      val: "aaaah",
      next: null,
    },
  });

  expect(ll.head).toEqual(0);
  expect(ll.tail).toEqual(0);
});

test("contains(value) returns true if there is a node in the list with a value property equal to the argument value", () => {
  var ll = new LinkedList();
  ll.insert("aaaah");
  ll.insert("baaah");
  ll.insert("caaah");
  ll.insert("daaah");

  /* expect(ll.contains("baaah")).toEqual({
    1: {
      val: "baaah",
      next: { val: "caaah", next: { val: "daaah", next: null } },
    },
    2: {
      val: "caaah",
      next: {
        val: "daaah",
        next: null,
      },
    },
    3: {
      val: "daaah",
      next: null,
    },
  }); */

  expect(ll.contains("baaah")).toEqual(true);
  expect(ll.contains("caaah")).toEqual(true);
  expect(ll.contains("aaaah")).toEqual(true);
  expect(ll.contains("daaah")).toEqual(true);
});

test("get(value) returns the node's val if there is a node in the list with a value property equal to the argument value, false if there isn't", () => {
  var ll = new LinkedList();
  ll.insert("aaaah");
  ll.insert("baaah");
  ll.insert("caaah");
  ll.insert("daaah");

  expect(ll.get("baaah")).toEqual({
    val: "aaaah",
    next: {
      val: "baaah",
      next: { val: "caaah", next: { val: "daaah", next: null } },
    },
  });

  expect(ll.get("caaah")).toEqual({
    val: "baaah",
    next: { val: "caaah", next: { val: "daaah", next: null } },
  });
});
test("isHead takes in a reference to a node and checks if it's the head of the linked list`", () => {});

test("isTail takes in a reference to a node and checks if it's the tail of the linked list`", () => {});
