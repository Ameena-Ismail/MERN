import React from 'react';
// import Style from './Style.css';



const Message = props => {
    const mess = props.message.mess;
    const msgEmit = props.message.user;
    const userName = props.user;
    // var backgroundColor = "";
    // var dir = "";

    // if (msgEmit === userName) {
    //     backgroundColor = "gray";
    //     dir = "right";
    // } else {
    //     backgroundColor = "blue"
    //     dir = "left";
    // }
    // const Style = {
    //     // clear: both  ,
    //     // backgroundColor: ${backgroundColor} ,
    //     width: "300px",
    //     padding: "10px",
    //     // float: ${dir} ,
    //     // margin${dir}: "30px" ,
    //     borderRadius: "10px",

    // }

    return (
        //     className={css`
        //     clear: both;
        //     background-color: ${backgroundColor};
        //     width: 300px;
        //     padding: 10px;
        //     float: ${dir};
        //     margin-${dir}: 30px;
        //     border-radius: 10px;
        // `}
        <div  >
            {/* style={Style} */}
            <h1 style={{ marginRight: "500px", padding: "10px", clear: "both", color: 'black', borderRadius: "10px", fontSize: " 17px", fontWeight: "540px", width: "100px", backgroundColor: "gray", float: "right" }}>{msgEmit}</h1>
            {/* // backgroundColor : ${backgroundColor} */}
            <p style={{ marginLeft: "500px", padding: "10px", clear: "both", color: 'black', borderRadius: "10px", fontSize: " 15px", fontWeight: "bold", width: "100px", backgroundColor: "blue", float: "left" }} >{mess}</p>

        </div >
    );
}

export default Message;