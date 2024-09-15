import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import styles from "./LoginPage.module.css";
import InputField from "./InputField";
import SocialIcon from "./SocialIcon";

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4d9332dce688905e33ff5e5e5070b8ebe01669f552f91e6a08278e4f24d5cbc?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
    alt: "Facebook",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/86a73a387483f000e91279f3f546d17b2b3f692475293f631517a682e869fe06?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
    alt: "Google",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0ab26f3d7e3af2c362a8786e8c1393408d76617d8559ef5e40d8ee3dc1a2c2d?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
    alt: "Twitter",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/88d202783d2475faecb481fb5c6729046e8baa458bd9842186635738ba25c778?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
    alt: "Apple",
  },
];

function LoginPage() {
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any login logic here
    navigate("/home"); // Navigate to the home page on successful login
  };

  return (
    <main className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Login</h1>
      <p className={styles.termsText}>
        By signing in you are agreeing <br /> to our{" "}
        <span className={styles.termsLink}>Terms and privacy policy</span>
      </p>
      <nav className={styles.tabContainer}>
        <a href="#" className={styles.activeTab}>
          Login
        </a>
        <a href="#" className={styles.inactiveTab}>
          Register
        </a>
      </nav>
      <form onSubmit={handleSubmit}>
        <InputField
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6e08e335da3d584b43b7a62d89a0ef82f513077720d93dea96bee76645eec635?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
          iconAlt="Email icon"
          placeholder="Email Address"
          type="email"
        />

        <div className={styles.passwordDivider} />
        <div className={styles.passwordContainer}>
          <div className={styles.passwordInputWrapper}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2795b3852dcb8dd50f92e94b62a4f53f4a3a399b3710fb06440fdb8a6d4127?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
              alt="Password icon"
              className={styles.passwordIcon}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/368fe15de43bc34eebc2daace74a4653862ccc0c9f9f9991187862fea9e814a9?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
            alt="Show password"
            className={styles.visibilityIcon}
          />
        </div>
        <div className={styles.passwordDivider} />
        <div className={styles.optionsContainer}>
          <div className={styles.rememberPasswordWrapper}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ad423ecfa305892a59c61afcb03df1626bbf5e449a74c781a18517bfc13aa84?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
              alt=""
              className={styles.checkboxIcon}
            />
            <label>
              <input type="checkbox" className={styles["visually-hidden"]} />
              Remember password
            </label>
          </div>
          <a href="#" className={styles.forgetPasswordLink}>
            Forget password
          </a>
        </div>
        <div className={styles.loginButtonWrapper}>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </div>
      </form>
      <p className={styles.connectText}>or connect with</p>
      <div className={styles.socialIconsContainer}>
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9758b1bddeb8bae58a60adb819c7c9a1c144b58c9ad3c1bed1ae451b4947712?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
        alt="Footer logo"
        className={styles.footerLogo}
      />
    </main>
  );
}

export default LoginPage;
