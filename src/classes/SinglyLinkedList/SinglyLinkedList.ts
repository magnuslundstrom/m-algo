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
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current!.next) {
      newTail = current;
      current = current!.next;
    }
    newTail!.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log(this.head);
    return current;
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

  serialize(): Node[] {
    const nodes: Node[] = [];
    this.traverse((item) => nodes.push(item));
    return nodes;
  }
}

// Object.defineProperty(SinglyLinkedList.prototype, 'push', { enumerable: true });
// Object.defineProperty(SinglyLinkedList.prototype, 'pop', { enumerable: true });
