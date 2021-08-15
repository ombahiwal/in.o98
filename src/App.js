import './index.css';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Gallery from './Pages/Gallery';
import TopNav from './Components/TopNav';
import Photography from './Pages/Photography';
function App(props) {
  
  return (
    <Router>
      <TopNav/>
    <Switch>
      <Route path="/gallery">
          <Gallery/> 
      </Route>
       <Route path="/photo">
          <Photography/> 
      </Route>
      <Route path="/">
      <Container>
      </Container>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
