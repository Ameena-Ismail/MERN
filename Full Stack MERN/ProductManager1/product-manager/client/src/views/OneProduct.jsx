import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OneProduct =props =>{
    const [oneProduct, setOneProduct] = useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res=>setOneProduct(res.data))
            .catch(err=> console.log(err))
    },[]) 
    return(
        <div>
        {
            oneProduct ? <div className="container">
                <h3>{oneProduct.title}</h3>
                <p>${oneProduct.price}</p>
                <p>{oneProduct.description}</p>
            </div>:""
        }
        </div>
    )
}
export default OneProduct