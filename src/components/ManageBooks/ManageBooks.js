import { faEdit, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageBooks = () => {
    const [booksData, setBooksData] = useState([]);
    let index=1;
    useEffect(()=>{

        fetch('https://still-gorge-92461.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            setBooksData(data);
        })

    },[])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://still-gorge-92461.herokuapp.com/delete/${id}`,{
             method:"DELETE"
        })
        .then(res => res.json())
        .then(result => {
        console.log(result);
         if(result){
            const newBooksData = booksData.filter(book =>book._id !== id);
            setBooksData(newBooksData)
        }
        })
    }

    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       booksData.map(book=>
                        <tr>
                            <td>{index++}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>$ {book.price}</td>
                            {/* <td><Button onClick={()=> handleDelete(book._id)} variant='danger'>Delete</Button></td> */}
                            <td> <FontAwesomeIcon icon={faEdit} style={{color:"rgb(70, 221, 70)", fontSize:"25px"}} /> <FontAwesomeIcon onClick={()=> handleDelete(book._id)} icon={faTrashAlt} style={{color:"red", fontSize:"25px", cursor:"pointer"}} /></td>
                        </tr>
                       )
                   }
                </tbody>
            </Table>


          
        </div>
    );
};

export default ManageBooks;