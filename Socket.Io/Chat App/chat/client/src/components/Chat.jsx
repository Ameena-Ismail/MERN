import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './Message';
// import Index from './Index';

const Chat = (props) => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [hasName, setHasName] = useState(false);
    // var bgColor = "";
    // var align = "";

    const [socket] = useState(() => io(":8000"));
    

    const onSubmit = e => {
        e.preventDefault();
        socket.emit("new_message_from_client", { user: userName, mess: currentMessage });
        setMessages([...messages, { user: userName, mess: currentMessage }]);
        setCurrentMessage("");
    };



    useEffect(() => {
        socket.on("send_message_to_all_other_clients", mess =>
            setMessages(sentMess => {
                return [...sentMess, mess];
            })
        );
        socket.on("new_user_announcement", mess =>
            setMessages(sentMess => {
                return [...sentMess, { user: "", mess: mess }];
            })
        )
    }, []);

    const renderContent = () => {
        if (hasName === false) {
            return (
                <>
                    {/* <Index /> */}
                    {/* <h1>get started</h1> */}
                    <form onSubmit={onNameSub}>
                        <label style={{ color: "red" }}>Name: </label>
                        <input type="text" onChange={(e) => { setUserName(e.target.value); }} />
                        <button type="submit">Send</button>
                    </form>
                </>
            );
        } else {
            return (
                <div >
                    <h3>{userName}</h3>
                    <div>
                        {messages.map((message, index) => {
                            return (
                                <Message key={index} message={message} user={userName} />
                            );
                        })}
                    </div>
                    <form onSubmit={onSubmit}>
                        <input type="text"
                            onChange={(e) => setCurrentMessage(e.target.value)} value={currentMessage} />
                        <button type="submit">send</button>
                    </form>
                </div>
            );
        }

    };
    const onNameSub = e => {
        e.preventDefault();
        socket.emit("new_user", userName);
        setHasName(true);
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default Chat;