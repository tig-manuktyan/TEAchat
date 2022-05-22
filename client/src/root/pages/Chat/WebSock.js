import React, { useRef, useState, useEffect } from "react";
import SendMessage from "../../components/ui-components/Input/SendMessage";
import { LoginLogo } from "./../../assets/icon/LoginLogo";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Websock = () => {
  const { t } = useTranslation("auth");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const now = new Date();
  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };
  const current = addZero(now.getHours()) + ":" + addZero(now.getMinutes());
  const socket = useRef();
  const [conected, setConected] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const openEmojiPicker = () => {
    setOpenEmoji(!openEmoji);
  };

  useEffect(() => {}, []);

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
  if (!conected) {
    return (
      <div className="connectBody">
        <div className="logoBlock">
          <LoginLogo />
          <h1>
            <span>TEA</span>
            <span>Code</span> {t("title")}
          </h1>
        </div>
        <div className="connectForm">
          <input
            type={"text"}
            placeholder="userName"
            value={userName}
            onKeyDown={handleKeyDownConnected}
            onChange={onChangeInputValueUserName}
          />
          <input
            type={"password"}
            placeholder="userName"
            value={password}
            onKeyDown={handleKeyDownConnected}
            onChange={onChangeInputValuePassword}
          />
          <button onClick={connect}>{t("login")}</button>
        </div>
      </div>
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

  console.log(message);

  return (
    <div className="chat">
      <div className="Navbar"></div>
      <div className="body">
        <div
          className="messageBlock"
          // onScroll={(e) => console.log(e.scrollTop(33000), "Scrolllllllll")}
        >
          {message.map((mess) => (
            <div key={mess.id} className="messageBody">
              {mess.event === "connection" ? (
                <div className="connected">
                  <p className="connectedText">
                    User connected {mess.userName}
                  </p>
                </div>
              ) : (
                <div className="message">
                  <p className="messageText">
                    <span className="userPhoto">
                      {mess.userName[0].toUpperCase()}
                    </span>
                    <span className="time">{mess.current}</span>
                    {mess.message}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="form">
          {openEmoji && (
            <div className="emojiPicker">
              <Picker
                pickerStyle={{
                  width: 550,
                  borderColor: "#212121",
                  backgroundColor: "#212121",
                  boxShadow: "none",
                }}
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                skinTone={SKIN_TONE_MEDIUM_DARK}
                groupNames={{ smileys_people: "PEOPLE" }}
                native
              />
            </div>
          )}
          <SendMessage
            value={value.replace(/^\s+|\s-$/gm, "")}
            onChange={onChangeInputValue}
            sendMessage={sendMessage}
            chosenEmoji={chosenEmoji}
            onEmojiClick={onEmojiClick}
            openEmojiPicker={openEmojiPicker}
            handleKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Websock;
