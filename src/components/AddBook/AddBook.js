import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddBook.css'

const AddProduct = () => {


    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [isAdded, setIsAdded] = useState(false);
    

    const onSubmit = data => {
        // console.log(data)
        const bookData = {
            name: data.book,
            author:data.author,
            price:data.price,
            image: imageURL
          };
        
        // console.log(bookData);

        const url = `http://localhost:8000/addBook`;

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(bookData)
        })
        .then(res=> res.json())
        .then(result=>{
            // console.log(result);
            if(result){
                setIsAdded(true);
                
            }
        })
 

        
    };

    const handleImageUpload =(event)=>{
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'dae1f2e63803aaa4446fc6453177f462');
        imageData.append('image', event.target.files[0]);
        // console.log(imageData);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
            // console.log(response.data.data.display_url);
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });

    }

    // console.log(imageURL);
    // console.log("is added: ",isAdded);

    return (
        <div className='field'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="book" placeholder="Book Name" type="text" ref={register} /> <br/>          
                <input name="author" placeholder="Author Name" type="text" ref={register} /> <br/>
                <input name="price" placeholder="Price" type="number" ref={register} /> <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} /> <br/> 


                {imageURL && <span >Image Uploaded Successfully</span>} <br/>

                {isAdded && <span>Book Added to the Database Successfully</span>} <br/>


                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                
                <input type="submit" />
                <input  type="reset"/>
            </form>
        </div>
    );
};

export default AddProduct;