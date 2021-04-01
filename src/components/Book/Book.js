import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Book.css'

const Book = (props) => {
    const {name, author, price, image, _id} = props.book;
    // console.log(props.book._id);

    const history = useHistory();
    const handleBuyBook = (id) =>{
        console.log(id);
        const url=`/book/${id}`;
        history.push(url)
    }
    return (
        <div>


                <div className="col mb-5 book-card">
                    <div className="card border-0 shadow-lg b-radius h-100 ">
                        <img src={image} className="card-img-top book-img" alt={name}/>

                        <div className="card-body book-body">
                            <h5 className="card-title text-bold">{name}</h5> 
                            <h6 className="card-title">{author}</h6>
                           
                        </div>

                        <div className="card-footer book-footer d-flex justify-content-around">
                            <h3 className='text-bold'>${price}</h3>
                            <Button onClick={()=>handleBuyBook(_id)} variant="info">Buy Now</Button>

                        </div>
                    </div>
                </div>









            {/* <Card style={{ width: '370px' }} classNameName='card m-2'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{author}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Button variant="info">Buy Now</Button>
                </Card.Body>
            </Card> */}
        </div>
    );
};

export default Book;