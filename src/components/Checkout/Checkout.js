import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css'

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);

    const {id} = useParams();
    const [book, setBook] = useState();
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const {name, price, author} = book || {};
    useEffect(()=>{
        fetch(`http://localhost:8000/book/${id}`)
        .then(res => res.json())
        .then(data => setBook(data))
    }, [id])

    const handleCheckout = () =>{

        const orderData = {
            name:loggedInUser.name,
            email: loggedInUser.email,
            bookId: id,
            bookName: name,
            bookQuantity: 1,
            bookPrice: price,
            orderDate: new Date().toDateString('dd/mm/yyyy'),
            // orderDate: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear(),
            // orderTime: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
            orderTime: new Date().toTimeString()
        }
        
        const url = `http://localhost:8000/addOrder`;

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(orderData)
        })
        .then(res=> res.json())
        .then(result=>{
            // console.log(result);
            if(result){
                
              setIsOrderPlaced(true)
         
            }
        })
      

    }

    return (
        <div>
            <h1>Checkout</h1>
           <div className="checkout">
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
                            <td>{name}</td>
                            <td>1</td>
                            <td>$ {price}</td>
                        </tr>
                       
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td>$ {price}</td>
                        </tr>
                    </tfoot>
                </Table>
            </div>

            <Button onClick={()=> handleCheckout()} variant='info' className='mb-5'> Place Order </Button> <br/>

            {
                isOrderPlaced && <span>Your Order has been placed successfully!</span>
            }

        </div>
    );
};

export default Checkout;