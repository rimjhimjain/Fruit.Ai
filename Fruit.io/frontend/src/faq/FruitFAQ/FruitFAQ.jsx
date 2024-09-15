
import React from "react";
import styles from "./FruitFAQ.module.css";
import { useNavigate } from "react-router-dom";
const FruitFAQ = () => {
  const navigate = useNavigate();
  const fruitData = [
    {
      name: "Tangerine",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/78bc79a2484295a25e120e708149f10f7b83bbe66d54c5707c1603d9e3f34517?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      question: "How is Tangerine healthy?",
      answer:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    },
    {
      name: "Litchi",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a5ea470b2726ecfdcee5f09bcdf1a455509dd431f1abff98220ff5f87e193dbf?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      question: "How is Litchi healthy?",
      answer:
        "Litchi is healthy as it's rich in vitamin C, antioxidants, and dietary fiber, supporting immunity and digestion.",
    },
    {
      name: "Cucumber",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/71d49d7d76e2f2b7f674a67f0a71cb6bd2401a9c14e99aa31a9f67bcb8481032?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      question: "How is Cucumber healthy?",
      answer:
        "Cucumber is healthy as it's low in calories, hydrating, and packed with vitamins, minerals, and antioxidants, promoting overall health and hydration.",
    },
  ];
  const goBackHome = () => {
    navigate("/home");
  };
  return (
    <main className={styles.container}>
      <header className={styles.title}>
        <h1>FAQ Section</h1>
      </header>
      <section>
        {fruitData.map((fruit, index) => (
          <article key={index} className={styles.faqItem}>
            <div className={styles.fruitInfo}>
              <img
                loading="lazy"
                src={fruit.image}
                className={styles.fruitImage}
                alt={`${fruit.name} fruit`}
              />
              <div className={styles.fruitName}>{fruit.name}</div>
            </div>
            <div className={styles.healthInfo}>
              <h2 className={styles.healthQuestion}>{fruit.question}</h2>
              <p className={styles.healthAnswer}>{fruit.answer}</p>
            </div>
          </article>
        ))}
      </section>
      <section className={styles.buttonContainer}>
        <button className={styles.backButton} onClick={goBackHome}>
          Back to Home
        </button>
      </section>
    </main>
  );
};

export default FruitFAQ;
