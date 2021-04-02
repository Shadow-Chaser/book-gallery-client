import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import AddBook from './components/AddBook/AddBook';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Orders from './components/Orders/Orders';
import OrderDetails from './components/OrderDetails/OrderDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
  
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
        <Route path="/home">
           <Home></Home>
           </Route>
          <PrivateRoute path="/admin">
           <Admin></Admin>
          </PrivateRoute>
          <Route path="/login">
           <Login></Login>
          </Route>
          <PrivateRoute path="/orders">
           <Orders></Orders>
          </PrivateRoute>
          <Route path="/orderDetails/:orderId">
            <OrderDetails></OrderDetails>
          </Route>
          <PrivateRoute path="/book/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          {/* <PrivateRoute path="/book/:bedType">
              <Book />
            </PrivateRoute> */}
          {/* <Route path="/addBook">
            <AddBook></AddBook>
          </Route> */}
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  </UserContext.Provider>
  );
}

export default App;
