import { TransitionGroup } from 'react-transition-group';
import { GetMethodKeys } from '../../../helpers/types';
import ComponentListNode from '../../nodes/Node';
import { List, Node } from '../../../models/SinglyLinkedList';
import { StyledSinglyLinkedList } from './StyledSinglyLinkedList';
import { Sidebar } from '../../sidebar/Sidebar';
import { StructureComponent, BaseState } from '../../core/StructureComponent';

export type OperateFunction = (index: string | number, value: string | number, methodName: GetMethodKeys<typeof List>) => void;

export class Singly extends StructureComponent<typeof List, Node> {
  state = {
    model: List,
    list: [],
    functionBody: '',
  } as BaseState<typeof List, Node>;

  render() {
    return (
      <StyledSinglyLinkedList>
        <Sidebar operate={this.operate} functionBody={this.state.functionBody} />
        <div className='list-wrapper'>
          <h1>Singly Linked List</h1>
          <TransitionGroup style={{ display: 'flex', flexWrap: 'wrap' }}>
            {this.state.model.serialize().map((node, idx) => (
              <ComponentListNode
                value={node.value}
                isTail={idx === this.state.list.length - 1}
                isHead={idx === 0}
                key={node.key}
              />
            ))}
          </TransitionGroup>
        </div>
      </StyledSinglyLinkedList>
    );
  }
}
export default Singly;
