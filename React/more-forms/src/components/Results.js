import React from "react";
const Results=({data}) => {
    const {firstName,lastName,email,password,confirmPassword}=data;
    return (
        <div>
            <h2>Results:</h2>
            <p>First Name:{firstName}</p>
            <p>Last Name:{lastName}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>confirm Password:{confirmPassword}</p>
        </div>
    );
};


export default Results;