import Container from './components/container/Container';
import Singly from './components/lists/SinglyLinkedList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes';
import { WhyPage } from './pages/Why';
function App() {
  return (
    <div className='App'>
      <Router>
        <Container>
          <Route path={routes.why} component={WhyPage} />
          <Route path={routes.singlyLinkedList} component={Singly} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
