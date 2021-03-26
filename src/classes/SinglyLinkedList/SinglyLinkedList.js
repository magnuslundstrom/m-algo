import { Node } from './Node';

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    let cur = this.head;
    let newTail = cur;
    while (cur.next) {
      newTail = cur;
      cur = cur.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  shift() {
    if (this.length === 0) return null;
    const temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return temp;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    else if (index === this.length) this.push(value);
    else if (index === 0) this.unshift(value);
    else {
      const newNode = new Node(value);
      const preNode = this.get(index - 1);
      const nextNode = preNode.next;
      preNode.next = newNode;
      newNode.next = nextNode;
    }
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return null;
    else if (index === this.length) return this.pop();
    else if (index === 0) return this.shift();
    else {
      const foundNode = this.get(index - 1);
      const temp = foundNode.next;
      foundNode.next = temp.next;
      this.length--;
      return temp;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  serialize() {
    const nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(current);
      current = current.next;
    }
    return nodes;
  }
}
