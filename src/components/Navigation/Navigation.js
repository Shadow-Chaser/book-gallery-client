import React, { useContext } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>

            <Navbar bg='light' expand='lg'>
                <Navbar.Brand>Book Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link><Link className='nav-link' to='/home'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to='/orders'>Orders</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to='/admin'>Admin</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to='/deals'>Deals</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to='/login'>Login</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to='/orders' >
                            <img src={loggedInUser.image} style={{ width:'30px'}} className='ml-3 rounded-circle' alt=""/>
                        </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        </div>
    );
};

export default Navigation;