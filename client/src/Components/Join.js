import React from "react";
import useAuth from "../AuthProvider/useAuth";

const Join = () => {
  const { socket, setUser, room, setRoom, setShow } = useAuth();

  const join = (e) => {
    e.preventDefault();
    socket.emit("join_room", room);
    setShow(true);
  };
  return (
    <div>
      <form className="join-form" onSubmit={join}>
        <h3>Enter All Value To Join Chat</h3>
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
          type="text"
          placeholder="Your Name"
        />
        <input
          onChange={(e) => {
            setRoom(e.target.value);
          }}
          type="text"
          placeholder="Room Code"
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Join;
