import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';
import DeleteProduct  from './DeleteProduct';


const EditProduct = (props) => {
    const { id } = props;
    const [ errors, setErrors ] = useState({});
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    // handle the form submit to create the document through the API
    const handleSubmit = (e) => {
        e.preventDefault();

        // axios to post the object to our API
        axios.put("http://localhost:8000/api/products/" + id, product)
            .then((res) => {
                console.log(res.data);
                // if we have validation errors - NOT errors with our server
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    // on success, redirect (navigate) to the movie list
                    navigate("/produts/" + id);  
                }
            })
            .catch((err) => {
            // on failure, save the errors in state so the user can correct bad inputs
                console.log(err);
            })
    }

    const afterDeleteHandler = () => {
        navigate("/products");
    }

    return(
        <div>
            <Link to="/products" className="right">All Products</Link>
            <h1>Edit Product</h1>
            <div className="display">
                <Form
                    product={product}
                    setProduct={setProduct}
                    errors={errors}
                    handleSubmit={handleSubmit} 
                    submitButtonLabel={ "Update" }
                />
                <DeleteProduct 
                    id={product._id}
                    afterDeleteHandler={afterDeleteHandler}
                />
            </div>
        </div>
    )
}

export default EditProduct;