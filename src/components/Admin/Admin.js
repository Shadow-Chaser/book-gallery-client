import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddBook from '../AddBook/AddBook';
import ManageBooks from '../ManageBooks/ManageBooks';


const Admin = () => {

    const [addBook, setAddBook] = useState(false);
    const [manageBooks, setManageBooks] = useState(true)

    return (
        <div className='row'>
           

                <div className="col-md-2 col-sm-12 px-0 fixed-left" id="left">

                    <div className="list-group w-100" >
                        <Button onClick={()=>{setAddBook(false); setManageBooks(true)}}>Manage Books</Button> <br/>
                        <Button onClick={()=>{setAddBook(true); setManageBooks(false)}}>Add Book</Button>
                    </div>

                </div>

                <div className="col-md-10 col-sm-12">
                    {
                        manageBooks && <ManageBooks></ManageBooks>
                    }

                    {
                        addBook && <AddBook></AddBook>
                    }
                </div>

                

            
        </div>
    );
};

export default Admin;