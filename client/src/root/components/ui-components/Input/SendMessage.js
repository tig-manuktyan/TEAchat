import React, { useState } from "react";
import { ISend } from "../../../assets/icon/ISend";
import { ISmile } from "../../../assets/icon/ISmile";
import { IVoice } from "../../../assets/icon/IVoice";
import TextArea from "../TextArea/TextArea";

import "./styles.css";
import { IAttachment } from './../../../assets/icon/IAttachment';

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
        <button className="smileBtn" onClick={openEmojiPicker}>
          <IAttachment />
        </button>
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
