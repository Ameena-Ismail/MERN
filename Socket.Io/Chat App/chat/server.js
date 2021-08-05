const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(8000, () => console.log("Listening to port:8000"));

const io = require('socket.io')(server);

var users = [];

io.on("connection", socket => {

    socket.on("new_user_connecting", data => {
        users.push(data);
        socket.broadcast.emit("new_user_announcement",  data + " has joined the chat.");
    })

    socket.on("new_message_from_client", data => {
        console.log(data);
        socket.broadcast.emit("send_message_to_all_other_clients", data);
    });
});

// require('./server/config/mongoose.config');
// const express = require('express');
// const cors = require('cors');
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// const app = express();
// app.use(cors());

// const server = app.listen(8000, () =>
//     console.log('The server is all fired up on port 8000')
// );

// const io = require('socket.io')(server, { cors: true });
// var user = [];
// io.on("connection", socket => {
//     socket.on("we_have_new_user_conecting", data => {
//         user.push(data);
//         socket.broadcast.emit("send_data", data);

//     });
//     console.log(socket.id)
//     console.log('Nice to meet you (hand shake)')
//     // socket.on("event_from_client", data => {
//     //     socket.broadcast.emit("send_data", data);
//     // })
// });
// /////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////


// // require('./server/config/mongoose.config');

// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // const server = app.listen(port, () => console.log(`The server is all fired up on port ${port}`));

// // const io = require("socket.io")(server);

// // io.on("connection", socket => {
// //     console.log(socket.id)
// //     console.log('Nice to meet you (hand shake)')
// //     socket.on("event_from_client", data => {
// //         socket.broadcast.emit("send_data", data);
// //     })
// // })
