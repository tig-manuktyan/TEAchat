import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Login } from "./../Login/Login";
import { Navbar } from "../../layout/Navbar/Navbar";
import { AddZero } from "../../utils/AddZero";
import { ChatContainer } from "./../../components/ChatContainer/ChatContainer";
import { ChatInput } from "../../components/ChatInput/ChatInput";
import styles from "./index.module.css";

const Websock = () => {
  const { t } = useTranslation("auth");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const now = new Date();
  const current = AddZero(now.getHours()) + ":" + AddZero(now.getMinutes());
  const socket = useRef();
  const [conected, setConected] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = value;
    message += emojiObject.emoji;
    setValue(message);
  };

  const openEmojiPicker = (showHid) => {
    setOpenEmoji(showHid);
  };

  function connect() {
    socket.current = new WebSocket("ws://localhost:5000");
    socket.current.onopen = () => {
      setConected(true);
      const message = {
        event: "connection",
        userName,
        current,
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

  const onChangeInputValuePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyDownConnected = (e) => {
    if (e.key === "Enter") {
      connect();
    }
  };
  const onFinish = (values) => {
    connect();
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (!conected) {
    return (
      <Login
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        userName={userName}
        handleKeyDownConnected={handleKeyDownConnected}
        onChangeInputValueUserName={onChangeInputValueUserName}
        password={password}
        onChangeInputValuePassword={onChangeInputValuePassword}
      />
    );
  }

  const sendMessage = async () => {
    const message = {
      userName,
      current,
      message: value,
      id: Date.now(),
      event: "message",
    };
    socket.current.send(JSON.stringify(message));
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.chat}>
      <Navbar />
      <div className={styles.body}>
        <ChatContainer message={message} />
        <ChatInput
          openEmoji={openEmoji}
          openEmojiPicker={openEmojiPicker}
          handleEmojiClick={handleEmojiClick}
          value={value}
          onChangeInputValue={onChangeInputValue}
          sendMessage={sendMessage}
          chosenEmoji={chosenEmoji}
          onEmojiClick={onEmojiClick}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Websock;
