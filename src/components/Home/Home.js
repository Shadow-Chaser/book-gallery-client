import React, {useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Book from '../Book/Book';
import './Home.css'


const Home = () => {

    const [booksData, setBooksData] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(()=>{

        fetch('https://still-gorge-92461.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            setBooksData(data);
            setSpinner(false)
        })

    },[])

    // console.log(booksData);

    return (
        <div className='mt-5'>

            {
                spinner && <Spinner animation="border" role="status" className='text-center spinner'>
                                <span className="sr-only">Loading...</span>
                             </Spinner>
            }

            <div className='row d-flex justify-content-center'>
                
                {
                    booksData.map(book=> <Book book = {book} key={book._id}></Book>)
                }
                
            </div>
        </div>
    );
};

export default Home;