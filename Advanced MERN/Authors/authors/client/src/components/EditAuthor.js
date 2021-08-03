import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import AuthorForm from './AuthorForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditAuthor = (props) => {
    const { id } = props;
    const [ errors, setErrors ] = useState({});
    const [ author, setAuthor ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/authors/" + id, author)
            .then((res) => {
                console.log(res.data);
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate("/");  
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"} >Home</Link>
            <h3>Edit this author:</h3>
            <AuthorForm 
                author={author}
                setAuthor={setAuthor}
                errors={errors}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default EditAuthor;