import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteProduct from './DeleteProduct';

const ProductDetail = (props) => {
    const [ product, setProduct ] = useState([]);

    // use effect to get the data as soon as the component is rendered
    useEffect(() => {
        // use axios to get all movies from the backend server / API
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then((res) => {
                console.log(res.data);
                // set the new data in our state from the API - set State
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id])

    const afterDeleteHandler = () => {
        navigate("/");
    }

    return(
        <div>
            <h1>{ product.title }</h1>
            <h3>Price: ${ product.price }</h3>
            <h3>Description: { product.description }</h3>
            <div>
                <Link to="/products">
                    <button type="submit">All Products</button>
                </Link>
                <Link to={"/products/edit/" +product._id}>
                    <button type="submit">Edit</button>
                </Link>
                <DeleteProduct 
                    id={product._id}
                    afterDeleteHandler={afterDeleteHandler}
                />
            </div>
        </div>
    )
}

export default ProductDetail;