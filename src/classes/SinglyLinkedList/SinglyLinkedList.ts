import { Node } from './Node';
type Callback = (node: Node, index: number) => any;

export class SinglyLinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  length: number = 0;

  push(value: Node['value']) {
    const newNode = new Node(value);
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

  pop() {
    console.log('Hi!');
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

Object.defineProperty(SinglyLinkedList.prototype, 'push', { enumerable: true });
Object.defineProperty(SinglyLinkedList.prototype, 'pop', { enumerable: true });
