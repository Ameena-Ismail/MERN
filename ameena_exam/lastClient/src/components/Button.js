import React from 'react'

const Button = (props) => {
    const colorings = {
        color: 'black',
        backgroundColor: props.text === "Start Project"
            ? "YELLOW"
            : props.text === "Move to Complete" ? "green" : props.text === "Plan project" ? "lightBlue" :"red"}
    return (
        <button
            disabled={props.isDisabled}
            onClick={props.onclickHandler}
            style={props.buttonStyle, colorings}>
            {props.text}
        </button>
    )
}

export default Button
