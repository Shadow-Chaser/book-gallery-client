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
          <Route path="/admin">
           <Admin></Admin>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/orders">
           <Orders></Orders>
          </Route>
          <Route path="/orderDetails/:orderId">
            <OrderDetails></OrderDetails>
          </Route>
          <Route path="/book/:id">
            <Checkout></Checkout>
          </Route>
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
