import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const DeleteAuthor = (props) => {
    const { id, afterDeleteHandler } = props;

    const deleteHandler = (e, id) => {
        e.preventDefault();

        axios.delete("http://localhost:8000/api/authors/delete/" + id)
        .then((res) => {
            console.log(res.data);
            afterDeleteHandler(id); 
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return(
        <div className="delete">
            <button className="btn btn-danger" onClick = { (e) => deleteHandler(e, id) }>Delete</button>
        </div>
    )
}

export default DeleteAuthor;