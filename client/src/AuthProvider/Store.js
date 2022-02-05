import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Store = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [allMsg, setAllMsg] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    socket.on("receive_msg", (data) => {
      setAllMsg((list) => [...list, data]);
    });
  }, [socket]);
  return {
    socket,
    user,
    setUser,
    room,
    setRoom,
    allMsg,
    setAllMsg,
    show,
    setShow,
  };
};

export default Store;
