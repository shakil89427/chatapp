const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const port = 5000 || process.env.PORT;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("hi");

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

app.listen(port, () => {
  console.log("listening to", port);
});
