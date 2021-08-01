import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Form from './Form';
import DeleteProduct from '../views/DeleteProduct';

const AllProducts = (props) => {
    const [ products, setProducts ] = useState([]);
    const [ errors, setErrors ] = useState({});
    const [ product, setProduct ] = useState({
        title: "",
        price: "",
        description: "",
    });
    const [ loaded, setLoaded ] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/products", product)
            .then((res) => {
                console.log(res.data);
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    // navigate("/products");
                    setLoaded(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loaded]);

    const afterDeleteHandler = (deletedProductId) => {
        let filteredProductArray = products.filter((product) => {
            return product._id !== deletedProductId;
        });
        setProducts(filteredProductArray);
    }

    return(
        <div>
            <Form
                product={product}
                setProduct={setProduct}
                errors={errors}
                handleSubmit={handleSubmit} 
                submitButtonLabel={ "Add Product" }

            />
            <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    console.log("This is a new product")
                    return(
                        <div key={ index } className="singleProduct">
                            <Link to={"/products/" + product._id}>
                                { product.title }
                            </Link>
                            <DeleteProduct 
                                id={product._id}
                                afterDeleteHandler={afterDeleteHandler}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;