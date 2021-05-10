import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
// PAGES
import Home from './pages/Home';
import Signin from './pages/Signin';
import Admin from './pages/Admin';
import Products from './pages/Products';
import Customers from './pages/Customers';
import GetCustomer from './pages/crud/GetCustomer';
import GetProduct from './pages/crud/GetProduct';
import UpdateCustomer from './pages/crud/UpdateCustomer';


import Account from './pages/Account';
import PrivateRoute from './components/PrivateRoute';
// CSS
import './App.css';


function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Switch>
            {/* Public Routes */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/SignIn">
              <Signin />
            </Route>
            {/* Private Routes */}
            <PrivateRoute component={Admin} path="/Admin" exact/>
            <PrivateRoute component={Account} path="/Account" exact/>

            <PrivateRoute component={Products} path="/Products" exact/>
            <PrivateRoute component={GetProduct} path="/Products/:id" exact/>

            <PrivateRoute component={Customers} path="/Customers" exact/>
            <PrivateRoute component={GetCustomer} path="/Customers/:id" exact/>
            <PrivateRoute component={UpdateCustomer} path="/Customers/update/:id" exact/>

          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
