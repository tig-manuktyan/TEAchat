import React, { useState } from "react";
import { ISend } from "../../../assets/icon/ISend";
import { ISmile } from "../../../assets/icon/ISmile";
import { IVoice } from "../../../assets/icon/IVoice";
import TextArea from "../TextArea/TextArea";

import "./styles.css";

const SendMessage = ({
  value,
  onChange,
  sendMessage,
  chosenEmoji,
  onEmojiClick,
  openEmojiPicker,
  openEmoji,
}) => {
  return (
    <div className="sendMessage">
      <div className="sendMessInput">
        {/* {chosenEmoji.emoji} */}
        <button className="smileBtn" onClick={openEmojiPicker}>
          <ISmile />
        </button>
        <TextArea value={value} onChange={onChange} />
      </div>
      {Boolean(value) ? (
        <button className="sendBtn" onClick={sendMessage}>
          <ISend />
        </button>
      ) : (
        <button className="sendBtn" onClick={sendMessage}>
          <IVoice />
        </button>
      )}
    </div>
  );
};
export default SendMessage;
