import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';


function App() {
  return (
    <div className="app">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/SignIn">
            <Signin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
