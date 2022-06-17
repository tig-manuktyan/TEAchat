import React from "react";
import styles from "./index.module.css";

export const TriggerDropItem = ({ text, LeftIcon }) => {
  
  return (
    <div className={styles.triggerDropItem}>
      <div className={styles.triggerDropIcon}>
        <LeftIcon />
      </div>
      <p className={styles.triggerDropText}>{text}</p>
    </div>
  );
};
