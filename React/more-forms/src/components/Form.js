import React, {useState} from "react";
const Form = props => {
    const { inputs, setInputs} = props;
    const [titleError, setTitleError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [cfmError, setCfmError] = useState("");
    const [cfm2Error, setCfm2Error] = useState("");

    const onChange= (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value,
});
			if(inputs.firstName.length < 2) {
        setTitleError("FirstName must be 2 characters or longer!");}
        else {
                setTitleError("");

    };

			if(inputs.lastName.length < 2) {
        setLastError("lastName must be 2 characters or longer!");}
        else {
                setLastError("");

    };

			if(inputs.email.length < 5) {
        setEmailError("email must be 5 characters or longer!");}
        else {
                setEmailError("");

    };

			if(inputs.password.length < 8) {
        setPwdError("password must be 8 characters or longer!");}
        else {
                setPwdError("");

    };

			if(inputs.confirmPassword.length < 8) {
        setCfmError("confirmPassword must be 8 characters or longer!");}
        else {
                setCfmError("");

    };

            if (inputs.confirmPassword === inputs.password) {
                setCfm2Error("")
            } else {
                setCfm2Error("Passwords do not match")
};
}

    return (
<form>
    <div className="form-group">
    <label htmlFor="firstName">First name</label>
    <input onChange={onChange} type="text" name="firstName" />
    {
        titleError ?
        <p style={{color:'red'}}>{ titleError }</p> :
        ''}

    </div>
    <div className="form-group">
    <label htmlFor="lastName">Last name</label>
    <input onChange={onChange} type="text" name="lastName" />
    {
    lastError ?
    <p style={{color:'red'}}>{ lastError }</p> :
    ''}

    </div>
    <div className="form-group">
    <label htmlFor="email">Email</label>
    <input onChange={onChange} type="text" name="email" />
        {
    emailError ?
    <p style={{color:'red'}}>{ emailError }</p> :
    ''}

    </div>
    <div className="form-group">
    <label htmlFor="password">Password</label>
    <input onChange={onChange} type="text" name="password" />
    {
    pwdError ?
    <p style={{color:'red'}}>{ pwdError }</p> :
    ''}

    </div>
    <div className="form-group">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input onChange={onChange} type="text" name="confirmPassword" />
    {
    cfmError ?
    <p style={{color:'red'}}>{ cfmError }</p> :
    ''}

    {
    cfm2Error ?
    <p style={{color:'red'}}>{ cfm2Error }</p> :
    ''}

    </div>
</form>
    );
};


export default Form;