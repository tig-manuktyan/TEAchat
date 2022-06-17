import React from "react";
import { ISend } from "../../../assets/icon/ISend";
import { ISmile } from "../../../assets/icon/ISmile";
import TextArea from "../TextArea/TextArea";
import { Menu, Dropdown } from "antd";

import DownloadFile from "../../Attachment/DownloadFile";
import { AudioOutlined } from "@ant-design/icons";
import { IAttachment } from "../../../assets/icon/IAttachment";
import { IDocument } from "../../../assets/icon/IDocument";
import { IPhoto } from "./../../../assets/icon/IPhoto";
import styles from "./index.module.css";

const SendMessage = ({
  value,
  onChange,
  sendMessage,
  openEmojiPicker,
  handleKeyDown,
}) => {
  const menu = (
    <Menu className={styles.themeAttachment}>
      <Menu.Item className={styles.dropItemAttachmentBlock}>
        <div className={styles.dropItemAttachment}>
          <IPhoto />
          <DownloadFile text={"Photo or Video"} />
        </div>
      </Menu.Item>
      <Menu.Item className={styles.dropItemAttachmentBlock}>
        <div className={styles.dropItemAttachment}>
          <IDocument />
          <DownloadFile text={"Document"} />
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.sendMessage}>
      <div className={styles.sendMessInput}>
        <div
          className={styles.smileBtn}
          onMouseEnter={(e) => {
            openEmojiPicker(true);
          }}
          onMouseLeave={(e) => {
            openEmojiPicker(false);
          }}
        >
          <ISmile />
        </div>

        <TextArea
          value={value}
          onChange={onChange}
          handleKeyDown={handleKeyDown}
        />

        <Dropdown overlay={menu} placement="topRight" trigger={["click"]}>
          <button className={styles.smileBtn}>
            <IAttachment />
          </button>
        </Dropdown>
      </div>
      {Boolean(value) ? (
        <button type="submit" className={styles.sendBtn} onClick={sendMessage}>
          <ISend />
        </button>
      ) : (
        <button type="submit" className={styles.sendBtn}>
          <AudioOutlined
            style={{
              fontSize: 18,
              color: "#EBE5E5",
            }}
          />
        </button>
      )}
    </div>
  );
};
export default SendMessage;
