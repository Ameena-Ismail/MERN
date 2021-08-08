import React from 'react'
import { Link } from '@reach/router'
import Box from "./Box"

const Main = (props) => {
    const { boxStyle, toDoProjects, doingProjects, doneProjects, startDoing, finishProject, removeProject } = props;

    return (
        <>
            <div style={boxStyle}>
                <Box COLOR="BLUE" nameOf="Backlog" data={toDoProjects} callBack={startDoing} />
                <Box COLOR="YELLOW" nameOf="In Progress" data={doingProjects} callBack={finishProject} />
                <Box COLOR="GREEN" nameOf="Completed" data={doneProjects} callBack={removeProject} />
            </div>
            <hr />
            <div style={{display: 'flex', justifyContent: "flex-start"}} >
            <Link to={'projects/new'} >
                <button style={{backgroundColor: 'coffee'}}>Add New Project Here</button>
            </Link>
            </div>
        </>
    )
}

export default Main;