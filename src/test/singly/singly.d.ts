export declare class Node {
  value: string;
  next: null | Node;
  constructor(value: string);
}

type val = string;
type RealNode = Node | null;
export declare class SinglyLinkedList {
  push(value: val): SinglyLinkedList;
  pop(): RealNode;
  shift(): RealNode;
  unshift(value: string): SinglyLinkedList;
  get(index: number): RealNode;
  set(index: number, val: string): boolean;
  insert(index: number, value: val): boolean;
  remove(index: number): RealNode;
  reverse(): SinglyLinkedList;
}
