import React from 'react'
import ListItem from './ListItem';

const Box = (props) => {
    const { data, nameOf, COLOR } = props;

    const boxStyle = {
        width: "250px",
        height: "360px",
        border: "2px solid black",
        overflow: "scroll",
        margin: "10px"
    }
    const projectBox = {
        border: "1px solid black",
        padding: "5px",
        margin: "10px"
    }
    const buttonStyle = {
        width: "200px",
    }

    const getText = (value) => {
        return value.status === "toDo"
            ? "Start Project"
            : value.status === "doning" ? "Move to Complete" : "Remove Project"
    }

    return (
        <div style={boxStyle}>
            <h3 style={{backgroundColor: COLOR, margin:0}}>{nameOf}</h3><hr />
            {
                data.map((value, index) => {
                    return (
                        <ListItem
                            data={value}
                            title={value.projectName}
                            projectDate={value.dueDate}
                            key={index}
                            listStyle={projectBox}
                            buttonCallBack={(e) => props.callBack(e, value)}
                            buttonStyle={buttonStyle}
                            buttonText={getText(value)}
                        />
                    )
                }
                )
            }
        </div>
    )
}

export default Box
