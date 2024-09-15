import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import styles from "./HelloChat.module.css";
import chatbot from "./chatbo.png";

const HelloChat = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle redirect to chat1
  const handleRedirect = () => {
    navigate("/home/chat1"); // Navigate to /home/chat1 route
  };

  return (
    // Wrap the whole main container in a clickable div and add onClick event
    <div onClick={handleRedirect} className={styles.clickableContainer}>
      <main className={styles.container}>
        <img
          loading="lazy"
          src={chatbot}
          className={styles.logo}
          alt="Hello Chat logo"
        />
        <h3 className={styles.title}>
          Hello <span className={styles.highlight}><br />Chat.</span>
        </h3>
        <p className={styles.subtitle}>The last chat app you'll ever need.</p>
      </main>
    </div>
  );
};

export default HelloChat;
