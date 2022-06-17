import React from "react";
import { Dropdown } from "antd";
import styles from "./index.module.css";
import { TriggerMenu } from "./../TriggerMenu/TriggerMenu";
import { randomHexColor } from "./../../utils/randomHexColor";

export const ChatContainer = ({ message }) => {
  return (
    <div className={styles.messageBlock}>
      {message.map((mess) => (
        <div key={mess.id} className={styles.messageBody}>
          {mess.event === "connection" ? (
            <div className={styles.connected}>
              <p className={styles.connectedText}>
                User connected {mess.userName}
              </p>
            </div>
          ) : (
            <div className={styles.message}>
              <Dropdown overlay={TriggerMenu} trigger={["contextMenu"]}>
                {/* <span className={styles.userPhoto}> */}
                {/* {mess.userName[0].toUpperCase()} */}
                {/* </span> */}
                <div className={styles.messageText}>
                  <span
                    className={styles.userName}
                    style={{ color: randomHexColor() }}
                  >
                    {mess.userName}
                  </span>
                  <div>
                    {mess.message}
                    <span className={styles.time}>{mess.current}</span>
                  </div>
                </div>
              </Dropdown>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
