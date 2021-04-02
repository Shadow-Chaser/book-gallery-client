import { faCheckCircle, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PopUp.css';

const PopUp = (props) => {
    console.log(props);
    const {isOpen, hideModal} = props;
    return (
        <div>
            <Modal show={isOpen} onHide={hideModal} className='pop-up'>
                    <Modal.Header>
                        <Modal.Title>Congratulations!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <FontAwesomeIcon icon={faCheckCircle} style={{color:"green", fontSize:"50px"}} /> 
                        <h4 >Your Order has been placed successfully!</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='info' onClick={hideModal}>Ok</Button>
                        <Button variant='info'> <Link to='/home' style={{textDecoration:"none", color:'white'}}>Order More!</Link> </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PopUp;