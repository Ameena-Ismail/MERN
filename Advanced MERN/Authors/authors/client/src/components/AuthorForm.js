import React from 'react';
import { Link, navigate } from '@reach/router';

const AuthorForm = (props) => {
    const  { author, setAuthor, errors, handleSubmit } = props;

    const inputChange = (e) => {
        let newAuthor = { ...author,
            [e.target.name]: e.target.value};
         setAuthor(newAuthor);
    }
    return(
        <div>
            <form onSubmit={ (e) => handleSubmit(e)} >
                <div>
                    <label>Name:</label>
                    {
                        errors.name ?
                        <span className="error-text">{errors.name.message}</span>
                        : null
                    }
                    <input
                        type="text"
                        name="name"
                        value={ author.name }
                        onChange={ (e) => inputChange(e) }
                        />
                </div>

                <Link to={"/"}>
                    <button type="submit" className="btn btn-danger m-1">Cancel</button>
                </Link>
                <button type="submit" className="btn btn-primary m-1">Submit</button>
            </form>
            
        </div>
    )
}

export default AuthorForm;