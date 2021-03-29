import { v1 as uuidv1 } from 'uuid';

export class Node {
  key: string;
  next: Node | null = null;
  constructor(public value: string | number) {
    this.key = uuidv1();
  }
}
