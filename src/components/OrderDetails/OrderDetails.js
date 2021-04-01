import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import './OrderDetails.css'

const OrderDetails = () => {
    const {orderId} = useParams();
    const [orderDetails, setOrderDetails] = useState();

    const {name, email, bookName,bookQuantity, bookPrice, orderDate, orderTime} = orderDetails || {};
    useEffect(()=>{
        fetch(`http://localhost:8000/orderDetails/${orderId}`)
        .then(res => res.json())
        .then(data => setOrderDetails(data))
    }, [orderId])

    return (
        <div>
            <h1>Order Details</h1>
            <div className="text-left m-3">
                <h3>Name: {name}</h3>
                <h5>Email: {email}</h5>
                <h6>Placing Date: {orderDate}</h6>
                <h6>Placing Time: {orderTime}</h6>
            </div>
            
            <div className="col-md-10 details-table">
            <Table hover className='border'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    
                    </thead>
                    <tbody>
                        <tr>
                            <td>{bookName}</td>
                            <td>{bookQuantity}</td>
                            <td>$ {bookPrice}</td>
                        </tr>
                        
                    </tbody>
                    
            </Table>
                
            </div> 
                <div className="text-right m-5 ">
                    <h4> Product Price : ${bookPrice}</h4>
                    <h4> Shipping Charge : $5</h4>
                    <h4> Payment Method : Cash On Delivery</h4>
                    <h3>Total : ${parseInt(bookPrice) + 5}</h3>
                </div>
        </div>
    );
};

export default OrderDetails;