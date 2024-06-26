const express = require("express");
const app = express();
const httpServer = require("http").createServer();
const cors = require("cors");
const port = 5000 || process.env.PORT;
app.use(cors());

/* Create instance */
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: [],
  },
});

/* Main Connection */
io.on("connection", (socket) => {
  /* Join Room */
  socket.on("join_room", (data) => {
    socket.join(data);
  });

  /* Send Messages */
  socket.on("send_msg", (data) => {
    socket.to(data.room).emit("receive_msg", data);
  });

  /* Disconnect */
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

/* Port Listening */
httpServer.listen(port, () => {
  console.log("listening to", port);
});
