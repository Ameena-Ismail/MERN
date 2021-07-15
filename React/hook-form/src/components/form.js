import React, { useState } from "react";
import {Result} from "./result"
const UserForm = (props) => {
    const [firstname, setFirstnamme] = useState("");
    const [lastname, setLastnamme] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const inputChange=(e)=>{
    setFirstnamme(e.target.value)
    console.log(e); 
}
    return (
        <div>
        <form >
            <div>
                <label>First name: </label>
                <input type="text" onChange={inputChange} />
            </div>
            <div>
                <label>Last name: </label>
                <input type="text" onChange={(e) => setLastnamme(e.target.value)} />
            </div>

            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

        </form>
        <Result firstname={firstname} lastname={lastname} email={email} password={password}/>
        {/* <div>
            <h1>{firstname} {lastname}</h1>
            <h2>{email}</h2>
            <h3>{password}</h3>
        </div> */}
        </div>
    );
};

export default UserForm;