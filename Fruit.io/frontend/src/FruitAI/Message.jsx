
import React from "react";
import styles from "./FruitAI.module.css";

const Message = ({ isAI, content, timestamp }) => {
  const messageClass = isAI ? styles.aiMessage : styles.userMessage;
  const timestampClass = isAI ? styles.aiTimestamp : styles.userTimestamp;

  return (
    <>
      <div className={`${styles.message} ${messageClass}`}>{content}</div>
      <time className={`${styles.timestamp} ${timestampClass}`}>
        {timestamp}
      </time>
    </>
  );
};

export default Message;
