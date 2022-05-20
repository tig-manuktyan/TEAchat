import React, { useState } from "react";
import { ISend } from "../../../assets/icon/ISend";
import { ISmile } from "../../../assets/icon/ISmile";
import { IVoice } from "../../../assets/icon/IVoice";
import TextArea from "../TextArea/TextArea";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

import "./styles.css";

const SendMessage = ({ value, onChange, sendMessage }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="sendMessage">
      <div className="sendMessInput">
        {openEmoji && (
          <Picker
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
          />
        )}
        {/* {chosenEmoji.emoji} */}
        <button className="smileBtn" onClick={() => setOpenEmoji(!openEmoji)}>
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
