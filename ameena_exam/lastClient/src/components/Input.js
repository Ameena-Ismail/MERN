import React, { useState } from 'react'
import Button from './Button'
import { Link } from '@reach/router';


const Input = (props) => {
    const { initialProject, allErrors, initialDueDate, addNewProject } = props;
    const [projectName, setProject] = useState(initialProject);
    const [status, setStatus] = useState("toDo");
    const [dueDate, setDueDate] = useState(initialDueDate);
    const [titleError, setTitleError] = useState("Your Project Must Be At least 3  charcter long !!!");

    const onSubmitHandler = e => {
        e.preventDefault();
        addNewProject({ projectName, status, dueDate });
        setProject("");
        setDueDate("");
    }

    const validatingName = (e) => {
        setProject(e.target.value)
        if (e.target.value.length > 2) {
            setTitleError("")
        }
        else {
            setTitleError("Your Project Must Be At least 3 charcter long !!!")
        }
    }
    return (
        <div>
            <Link to={'/'}>
                Back To Dashboard
            </Link>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label> Project Name :-  </label>
                    <input
                        type="text"
                        onChange={validatingName}
                        value={projectName} /><br />
                    {titleError}
                    {allErrors.projectName ?
                        <p style={{ color: 'red' }}>{allErrors.projectName.message}</p> : ''
                    }
                </p>
                <p>
                    <input
                        type="hidden"
                        onChange={(e) => setStatus(e.target.value)}
                        value="toDo" />
                </p>
                <p>
                    <label>DueDate </label>
                    <input
                        type="date"
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate} />
                    {allErrors.dueDate ?
                        <p style={{ color: 'red' }}>{allErrors.dueDate.message}</p> : ''
                    }
                </p>
                <Button
                    text=" Submit  Project"
                    isDisabled={projectName.length < 3 ? true : false}
                />
            </form>
        </div>
    )
}

export default Input
