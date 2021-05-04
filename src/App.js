import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Signin from './pages/Signin';


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
          <Route exact path="/Admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
