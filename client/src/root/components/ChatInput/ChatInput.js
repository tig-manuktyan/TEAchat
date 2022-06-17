import React from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import SendMessage from "../ui-components/Input/SendMessage";
import styles from "./index.module.css";

export const ChatInput = ({
  openEmoji,
  openEmojiPicker,
  handleEmojiClick,
  value,
  onChangeInputValue,
  sendMessage,
  chosenEmoji,
  onEmojiClick,
  handleKeyDown,
}) => {
  return (
    <div className={styles.form}>
      {openEmoji && (
        <div
          className={styles.emojiPicker}
          onMouseEnter={(e) => {
            openEmojiPicker(true);
          }}
          onMouseLeave={(e) => {
            openEmojiPicker(false);
          }}
        >
          <Picker
            pickerStyle={{
              width: 550,
              borderColor: "#212121",
              backgroundColor: "#212121",
              boxShadow: "none",
            }}
            onEmojiClick={handleEmojiClick}
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
  );
};
