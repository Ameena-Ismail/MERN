import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import AuthorForm from './AuthorForm';

const CreateAuthor = (props) => {
    const [ errors, setErrors ] = useState({});
    const [ author, setAuthor ] = useState({
        name:""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", author)
        .then((res) => {
            console.log(res.data);
            // if we have validation errors - NOT errors with our server
            if(res.data.errors){
                setErrors(res.data.errors);
            }
            else{
                // on success, redirect (navigate) to the movie list
                navigate("/");  
            }
        })
        .catch((err) => {
        // on failure, save the errors in state so the user can correct bad inputs
            console.log(err);
        })
    };

    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"} >Home</Link>
            <h3>Add a new Author:</h3>
            <AuthorForm 
                author={author}
                setAuthor={setAuthor}
                errors={errors}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default CreateAuthor;