import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Form = (props) => {
    const { product, setProduct, errors, setErrors, submitButtonLabel, handleSubmit } = props;

    const inputChange = (e) => {
        console.log("input title: " + e.target.title);
        console.log("input price: " + e.target.price);
        console.log("input description: " + e.target.description);

        let newProduct = {...product,
        [e.target.name]: e.target.value};
        setProduct(newProduct);
    }

    return(
        <div>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <div>
                    <label>Title</label>
                    {
                        errors.title ?
                            <span className="error-text">{errors.title.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="title"  // match my key
                        value={ product.title }
                        onChange={ (e) => inputChange(e) }
                        />
                </div>
                <div>
                    <label>Price</label>
                    {
                        errors.price ?
                            <span className="error-text">{errors.price.message}</span>
                            : null
                    }
                    <input
                        type="number"
                        name="price"  // match my key
                        value={ product.price }
                        onChange={ (e) => inputChange(e) }
                        />
                </div>
                <div>
                    <label>Description</label>
                    {
                        errors.description ?
                            <span className="error-text">{errors.description.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="description"  // match my key
                        value={ product.description }
                        onChange={ (e) => inputChange(e) }
                        />
                </div>
                <button type="submit" className="submitBtn">{ submitButtonLabel }</button>
            </form>
        </div>
    )
}

export default Form;