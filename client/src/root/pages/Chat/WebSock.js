import React, { useRef, useState, useEffect } from "react";
import SendMessage from "../../components/ui-components/Input/SendMessage";
import TextArea from "../../components/ui-components/TextArea/TextArea";
import { LoginLogo } from "./../../assets/icon/LoginLogo";
import "./styles.css";

const Websock = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const socket = useRef();
  const [conected, setConected] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {}, []);
  function connect() {
    socket.current = new WebSocket("ws://localhost:5000");
    socket.current.onopen = () => {
      setConected(true);
      const message = {
        event: "connection",
        userName,
        id: Date.now(),
      };
      console.log("patkluchilsya");
      socket.current.send(JSON.stringify(message));
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessage((prev) => [message, ...prev]);
    };
    socket.current.onclose = () => {
      console.log("Socket Close");
    };
    socket.current.onerror = () => {
      console.log("Socket Error");
    };
  }
  const onChangeInputValue = (e) => {
    setValue(e.target.value);
  };

  const onChangeInputValueUserName = (e) => {
    setUserName(e.target.value);
  };

  if (!conected) {
    return (
      <div className="connectBody">
        <div className="logoBlock">
          <LoginLogo />
          <h1>
            <span>TEA</span>
            <span>Code</span> Panel
          </h1>
        </div>
        <div className="connectForm">
          <input
            type={"text"}
            placeholder="userName"
            value={userName}
            onChange={onChangeInputValueUserName}
          />
          <button onClick={connect}>voyti</button>
        </div>
      </div>
    );
  }
  const sendMessage = async () => {
    const message = {
      userName,
      message: value,
      id: Date.now(),
      event: "message",
    };
    socket.current.send(JSON.stringify(message));
    setValue("");
  };
  console.log(message);
  return (
    <div className="chat">
      <div className="Navbar"></div>
      <div className="body">
        <div className="messageBlock">
          {message.map((mess) => (
            <div key={mess.id}>
              {mess.event === "connection" ? (
                <div className="connected">User connected {mess.userName}</div>
              ) : (
                <div className="message">
                  {mess.userName}
                  {mess.message}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="form">
          <SendMessage
            value={value}
            onChange={onChangeInputValue}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Websock;
