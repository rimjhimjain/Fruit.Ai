import React from "react";
import styles from "./LoginPage.module.css";

function SocialIcon({ src, alt }) {
  return <img src={src} alt={alt} className={styles.socialIcon} />;
}

export default SocialIcon;
