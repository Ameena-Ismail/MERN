import React from 'react';

const BigInverse =props=>{
    return(
        <div>
            <h1>{props.firstName},{props.lastName}</h1>
            <p>Age : {props.age}</p>
            <p>Hair Color :{props.hairColor}</p>
        </div>
    );
}
export default BigInverse;