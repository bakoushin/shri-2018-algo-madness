class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }
  link(node) {
    this._next = node;
  }
  unlink() {
    this._next = null;
  }
  getNext() {
    return this._next;
  }
  getValue() {
    return this._value;
  }
}

class LinkedList {
  constructor(iterable) {
    this._head = null;
    this._tail = null;
    for (const item of iterable) {
      this.push(item);
    }
  }
  push(value) {
    const node = new Node(value);
    if (!this._head) {
      this._head = node;
    }
    if (!this._tail) {
      this._tail = node;
    } else {
      this._tail.link(node);
      this._tail = node;
    }
  }
  getHead() {
    return this._head;
  }
  getTail() {
    return this._tail;
  }
  reverse() {
    if (!this._head) {
      return;
    }
    let prevNode = this._head;
    this._tail = prevNode;
    let nextNode = prevNode._next;
    prevNode._next = null;
    while(nextNode) {
      const currentNode = nextNode;
      nextNode = currentNode._next;

      currentNode._next = prevNode;
      prevNode = currentNode;

      this._head = currentNode;
    }
  }
}

module.exports = LinkedList;
