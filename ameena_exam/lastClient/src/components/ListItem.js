import React from 'react'
import Button from './Button';
import moment from 'moment'

var now = moment().format('L');

const ListItem = (props) => {
    const { data, listStyle, buttonStyle, title, projectDate, buttonCallBack, buttonText } = props
    const projDate = moment(projectDate).format('L');
    const dateStyle = { color: 'red' };
    return (
        <div style={listStyle}>
            <h5>{title}</h5>
            {now > projDate ?
                <h6>Due: {projDate}</h6> :
                <h6 style={dateStyle}>Due Date: {projDate}</h6>}
            <Button
                onclickHandler={(e) => buttonCallBack(e, data)}
                text={buttonText}
                isDisabled={false}
                buttonStyle={buttonStyle}
            />
        </div>
    )
}

export default ListItem
