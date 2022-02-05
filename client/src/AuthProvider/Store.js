import io from "socket.io-client";

const Store = () => {
  const socket = io.connect("http://localhost:5000");

  return {
    socket,
  };
};

export default Store;
