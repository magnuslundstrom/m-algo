import Container from './components/pure/container/Container';
import Singly from './components/structures/SinglyLinkedList/SinglyLinkedList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes';
import { Why, Home } from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Container>
          <Route path={routes.index} component={Home} exact={true} />
          <Route path={routes.why} component={Why} exact={true} />
          <Route path={routes.singlyLinkedList} component={Singly} exact={true} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
