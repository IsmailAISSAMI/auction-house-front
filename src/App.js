import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
// PAGES
import Admin from './pages/Admin';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Products from './pages/Products';

// CSS
import './App.css';


function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
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
            <Route exact path="/Products">
              <Products />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
