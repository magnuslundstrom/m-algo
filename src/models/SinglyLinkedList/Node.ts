import { v1 as uuidv1 } from 'uuid';

export interface N {
  key: string;
  next: Node | null;
  value: string | number;
}

export class Node implements N {
  key: N['key'];
  next: N['next'] = null;
  constructor(public value: N['value']) {
    this.key = uuidv1();
  }
}
