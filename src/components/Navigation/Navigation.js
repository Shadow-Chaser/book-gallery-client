import React, { useContext } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <b> <h3 class='navbar-brand'>Book Shop</h3> </b>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link className='nav-link' to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to="/orders">Orders</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to="/admin">Admin</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to="/deals">Deals</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to="/login">Login</Link>
                    </li>
                    {/* <li class="nav-item">
                        <h5>{loggedInUser.name}</h5>
                    </li> */}
                    <li class="nav-item">
                        <img src={loggedInUser.image} style={{ width:'55px'}} className='ml-3 rounded-circle' alt=""/>
                    </li>
                    
                    
                </ul>
                </div>
            </div>
            </nav>







            
              {/* <Navbar bg="light" variant="light">
                <Navbar.Brand to="/home">Book Shop</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link to="/home">Home</Nav.Link>
                    <Nav.Link to="/orders">Orders</Nav.Link>
                    <Nav.Link to="/admin">Admin</Nav.Link>
                    <Nav.Link to="/deals">Deals</Nav.Link>
                    <Nav.Link to="/login">Login</Nav.Link>
                    <h4>{loggedInUser.email}</h4>
                </Nav>
            </Navbar> */}
        </div>
    );
};

export default Navigation;