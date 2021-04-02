import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddBook.css'

const AddProduct = () => {


    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [isAdded, setIsAdded] = useState(false);
    

    const onSubmit = data => {
        const bookData = {
            name: data.book,
            author:data.author,
            price:data.price,
            image: imageURL
          };
        

        const url = `https://still-gorge-92461.herokuapp.com/addBook`;

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(bookData)
        })
        .then(res=> res.json())
        .then(result=>{
            if(result){
                setIsAdded(true);
                
            }
        })
 

        
    };

    const handleImageUpload =(event)=>{
        const imageData = new FormData();
        imageData.set('key', 'dae1f2e63803aaa4446fc6453177f462');
        imageData.append('image', event.target.files[0]);
        // console.log(imageData);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });

    }


    return (
        <div className='field'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="book" placeholder="Book Name" type="text" ref={register} /> <br/>          
                <input name="author" placeholder="Author Name" type="text" ref={register} /> <br/>
                <input name="price" placeholder="Price" type="number" ref={register} /> <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} /> <br/> 


                {imageURL && <span ><FontAwesomeIcon icon={faCheckSquare} style={{color:"rgb(70, 221, 70)"}} /> Image Uploaded Successfully</span>} <br/>

                {isAdded && <span><FontAwesomeIcon icon={faCheckSquare} style={{color:"rgb(70, 221, 70)"}} /> Book Added to the Database Successfully</span>} <br/>


                
                <input type="submit" />
                <input type="reset"/>
            </form>
        </div>
    );
};

export default AddProduct;