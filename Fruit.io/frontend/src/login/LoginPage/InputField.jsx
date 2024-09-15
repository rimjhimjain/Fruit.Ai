import React from "react";
import styles from "./LoginPage.module.css";

function InputField({ iconSrc, iconAlt, placeholder, type }) {
  return (
    <div className={styles.inputContainer}>
      <img src={iconSrc} alt={iconAlt} className={styles.inputIcon} />
      <input
        type={type}
        placeholder={placeholder}
        className={styles.inputField}
      />
      <div className={styles.inputDivider} />
    </div>
  );
}

export default InputField;
