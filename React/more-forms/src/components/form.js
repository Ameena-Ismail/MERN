import React, { useState } from "react";
import { Result } from "./result"
const UserForm = (props) => {
    const [firstname, setFirstnamme] = useState("");
    const [firstnameError, setFirstnammeError] = useState("");
    const [lastname, setLastnamme] = useState("");
    const [lastnameError, setLastnammeError] = useState("");
    const [email, setEmail] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const inputChange = (e) => {
        setFirstnamme(e.target.value);
        setFirstnammeError("First name is should be more than 2 char");
        if(e.target.value.length > 2) {
            setFirstnammeError("");
        }
    };
    const lastnametChange = (e) => {
        setLastnamme(e.target.value);
        setLastnammeError("Last name should be more than 2 char");
        if(e.target.value.length > 2) {
            setLastnammeError("");
        }
    };
    const emailtChange = (e) => {
        setEmail(e.target.value);
        setEmailError("Email should be more than 5 char");
        if(e.target.value.length > 5) {
            setEmailError("");
        }
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError("Email should be more than 5 char");
        if(e.target.value.length > 5) {
            setPasswordError("");
        }
    };

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstname, email, password };
    //     console.log("Welcome", newUser);
    //     setHasBeenSubmitted(true);
    // };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
	//     return "Thank you for submitting the form!";
	// } else {
	//     return "Welcome, please submit the form";
	// }
    // }
    return (
        <div>
            <form>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={inputChange} />
                    {   
                    firstnameError 
                    ?<p>{ firstnameError }</p> 
                    :''
                }
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={lastnametChange} />
                    {   
                    lastnameError ?
                    <p>{ lastnameError }</p> :
                    ''
                }
                </div>

                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={emailtChange} />
                    {   
                    EmailError ?
                    <p>{ EmailError }</p> :
                    ''
                }
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" onChange={passwordChange} />
                    {   
                    PasswordError ?
                    <p>{ PasswordError }</p>
                    :''
                }
                </div>
                <input type="submit" value="Create User" />

            </form>
            <Result firstname={firstname} lastname={lastname} email={email} password={password} />
            {/* <div>
            <h1>{firstname} {lastname}</h1>
            <h2>{email}</h2>
            <h3>{password}</h3>
        </div> */}
        </div>
    );
};

export default UserForm;