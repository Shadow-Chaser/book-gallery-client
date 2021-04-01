import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/orders?email='+loggedInUser.email, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
               
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])


    const history = useHistory();
    const handleOrderDetails = (orderId) =>{
        // console.log(id);
        const url=`/orderDetails/${orderId}`;
        history.push(url)
    }

   
    return (
        <div>
            <h1>Order History</h1>
            
            <div className="col-md-9 table-div">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>OrderID</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                       orders.map(order=>
                        <tr>
                            <td>#{order._id}</td>
                            <td>{order.bookName}</td>
                            <td>{order.orderDate}</td>
                            
                            <td><Button onClick={()=>handleOrderDetails(order._id)} variant='info'>Get Details</Button></td>
                           
                        </tr>
                       )
                   }
                </tbody>
            </Table>
            </div>

        </div>
    );
};

export default Orders;