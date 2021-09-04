"use strict";

/**
 * Trying to understand linked lists...
 *
 * In JS, can I impliment a linked list without using an array data structure?
 *
 * Yes
 *
 * Linked lists are not contiguous. Each node can be anywhere in memory, and then
 * there are next (and maybe prev) properties on the node which contain pointers to
 * the next or previous node in the list (which could be anywhere in memory)
 *
 * linked lists are important in studying how pointers work.
 *
 * interview questions focus on linked lists because they show you understand how
 * references to data work.
 *
 * data by value
 **/
