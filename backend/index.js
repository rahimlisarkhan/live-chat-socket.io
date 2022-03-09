const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {
    Server
} = require("socket.io")

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("signin_service", (data) => {
        socket.join(data)
        console.log(`UserID:${socket.id} signin service:${data}`);
    })

    socket.on("send_message", (data) => {
        socket.to(data.service).emit("messages", data)
    })

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    })

})

server.listen(3002, () => {
    console.log("Listening 3002 port");
})