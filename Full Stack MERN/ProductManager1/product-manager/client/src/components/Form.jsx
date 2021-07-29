import axios from 'axios';
import React, { useState }  from 'react';
import { navigate } from '@reach/router';

const Form = props =>{
    const [myForm, setMyForm] = useState({
        title: "",
        price: 0,
        description:""
    })
    const [errors, setErrors] = useState({})
    const onChangeHandler = e =>{
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create", myForm)
        .then(res => {
            if(res.data.err) {
                console.log("There were errors!");
                setErrors(res.data.err.errors)
            } else {
                console.log("It worked!!");
                navigate("/");
            }
            })
        .catch(err => console.log("Something went wrong with the post request!", err))
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit} className="container">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" onChange={onChangeHandler} value={myForm.title}/>
                    {
                    errors.title ? <span className="text-danger">{errors.title.message}</span> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" className="form-control" onChange={onChangeHandler} value={myForm.price}/>
                    {
                    errors.price ? <span className="text-danger">{errors.price.message}</span> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" className="form-control" onChange={onChangeHandler} value={myForm.description}>{myForm.description}</textarea>
                    {
                    errors.description ? <span className="text-danger">{errors.description.message}</span> : ""
                    }
                </div>
                <input type="submit" value="create" className="btn btn-primary mt-2"/>
            </form>
        </div>
    )
}

export default Form