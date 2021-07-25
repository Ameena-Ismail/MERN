import React from 'react'

const Colors = (props) => {
    const styles = {
        background: props.back,
        color: props.color
    }
    return (
        <div>
            <h1 style={styles}>The Word is: {props.str}</h1>
        </div>
    )
}

export default Colors