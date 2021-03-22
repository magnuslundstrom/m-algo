import { SinglyLinkedList } from './SinglyLinkedList';
export * from './Node';

export const List = new SinglyLinkedList();
export type ListPrototype = keyof typeof SinglyLinkedList.prototype;

List.push('1');
List.push('2');
List.push('3');
