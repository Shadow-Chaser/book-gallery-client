import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css'
import PopUp from '../PopUp/PopUp';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const {id} = useParams();
    const [book, setBook] = useState();
    const {name, price, author} = book || {};
    useEffect(()=>{
        fetch(`https://still-gorge-92461.herokuapp.com/book/${id}`)
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
            orderTime: new Date().toTimeString()
        }
        
        const url = `https://still-gorge-92461.herokuapp.com/addOrder`;

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(orderData)
        })
        .then(res=> res.json())
        .then(result=>{
            if(result){   
                showModal();
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

            <PopUp isOpen={isOpen} hideModal={hideModal}></PopUp>
               
        </div>
    );
};



export default Checkout;