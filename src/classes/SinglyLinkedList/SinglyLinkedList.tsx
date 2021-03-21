import { ListNode } from './Node';

type Callback = (node: ListNode, index: number) => any;

export class SinglyLinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  length: number = 0;

  push(value: ListNode['value']) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse(cb: Callback) {
    let current = this.head;
    let index = 0;
    while (current) {
      cb(current, index);
      current = current.next;
      index++;
    }
  }
}
