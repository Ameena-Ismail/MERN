import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteAuthor from './DeleteAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllAuthors = (props) => {
    const [ authors, setAuthors ] = useState([]);
    const [ author, setAuthor ] = useState({
        name:"",
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res.data);
            setAuthors(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const afterDeleteHandler = (deletedAuthortId) => {
        let filteredAuthorArray = authors.filter((author) => {
            return author._id !== deletedAuthortId;
        });
        setAuthors(filteredAuthorArray);
    }

    return(
        <div className="p-5">
            <h1>Favorite authors</h1>
            <Link to={"/authors/new"} >Add an author</Link>
            <h3>We have quotes by:</h3>
            <table className="table table-striped table-bordered m-5 col-4">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            authors.map((author, index) => (
                                <tr key={index}>
                                    <td>{author.name}</td>    
                                    <td className="d-flex">
                                        <Link to={"/authors/edit/" + author._id}>
                                            <button className="mx-5 btn btn-success">Edit</button>
                                        </Link>
                                        <DeleteAuthor 
                                            id={author._id}
                                            afterDeleteHandler={afterDeleteHandler}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;