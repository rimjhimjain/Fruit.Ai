import React from "react";
import { Link } from "react-router-dom";  
import styles from "./FruitAi.module.css";


const Card = ({ title, className, children, onClick }) => (
  <div className={`${styles.card} ${className}`} onClick={onClick}>
    {children || title}
  </div>
);

function FruitAi() {

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Fruit.Ai</h1>
      <p className={styles.subtitle}>"Be Healthy!"</p>
      
      <section className={styles.cardContainer}>
        {/* Link the ChatBot card to the /home/chatbot route */}
        <Link to="/home/chatbot" className={styles.chatBotLink}>
          <Card title="ChatBot" className={styles.chatBotCard} />
        </Link>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c953e41ceb38da39af3ffc2b5796b661c6e37fedc17951d27fef5885b97a74fa?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
          alt="Fruit AI representation"
          className={styles.cardImage}
        />
      </section>

      <section className={styles.cardContainer}>
        <Link to= "/home/About" className={styles.aboutCard}>
          <Card title="About" className={styles.aboutCard} />
        </Link>
        <Link to= "/home/Faq" className={styles.faqCard}>
        <Card title="FAQs" className={styles.faqCard} />
        </Link>
      </section>
    </main>
  );
}

export default FruitAi;
