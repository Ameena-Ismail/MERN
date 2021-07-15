import React from 'react';

export const Result=(props)=>{

    return(
<div>
            <h1>{props.firstname} {props.lastname}</h1>
            <h2>{props.email}</h2>
            <h3>{props.password}</h3>
        </div>
    );
};