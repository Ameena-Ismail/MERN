// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const Index = () => {
//     const [messages, setMessages] = useState([]);
//     const [currentMessage, setCurrentMessage] = useState("");
//     const [userName, setUserName] = useState("");
//     const [hasName, setHasName] = useState(false);


//     const [socket] = useState(() => io(":8000"));

//     const onNameSub = e => {
//         e.preventDefault();
//         socket.emit("new_user", userName);
//         setHasName(true);
//     };
//     return (
//         <>
//             {/* <h1>Get Started Right now !</h1> */}
//             <form onSubmit={onNameSub}>
//                 <label>Name: </label>
//                 <input type="text" onChange={(e) => { setUserName(e.target.value); }} />
//                 <button type="submit">Send</button>
//             </form>
//         </>
//     )
// }

// export default Index
