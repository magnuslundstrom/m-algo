import Container from './components/container/Container';
import Singly from './components/lists/SinglyLinkedList';
import './add.js';
function App() {
  return (
    <div className='App'>
      <Container>
        <Singly />
      </Container>
    </div>
  );
}

export default App;
