import React from "react";
import useAuth from "../AuthProvider/useAuth";
import ScrollToBottom from "react-scroll-to-bottom";

const Send = () => {
  const { socket, user, room, allMsg, setAllMsg } = useAuth();
  const sendmsg = async (e) => {
    e.preventDefault();
    const data = {
      room,
      user,
      msg: e.target[0].value,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    await socket.emit("send_msg", data);
    setAllMsg((list) => [...list, data]);
    e.target.reset();
  };
  return (
    <div className="chat-main">
      <div className="chat-header">
        <h3>Live Chat</h3>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="scroll">
          {allMsg.map((single) => (
            <div className="">
              <p>{single.msg}</p>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <form className="chat-footer" onSubmit={sendmsg}>
        <input type="text" placeholder="Type your Message" />
        <button type="submit">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Send;
