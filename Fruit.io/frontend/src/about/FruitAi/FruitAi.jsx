
import React from "react";
import styles from "./FruitAi.module.css";
import { useNavigate } from "react-router-dom";

const FruitAi = () => {
  const navigate = useNavigate();
  const fruitImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcff80b3057aee0f8077aefd7192545a27bc71f254e2895b1f0c60d126e474ff?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      alt: "Fruit image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcff80b3057aee0f8077aefd7192545a27bc71f254e2895b1f0c60d126e474ff?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      alt: "Fruit image 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc3550dc580ac21bde89b906d75032db98e254cbf7c2f22c9f2bf5d6eea0ada4?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      alt: "Small fruit image",
      className: styles.smallFruitImage,
    },
  ];

  const goBackHome = ( ) => {
    navigate("/home");
  }
  return (
    <main className={styles.container}>
      <section className={styles.imageWrapper}>
        {fruitImages.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className={image.className || styles.fruitImage}
          />
        ))}
      </section>
      <section className={styles.contentBox}>
        <h1 className={styles.title}>Fruit.Ai</h1>
        <p className={styles.description}>
          Whether you're looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for
          you to integrate the best fruits into your daily routine.
        </p>
        <button className={styles.ctaButton}>
          <span className={styles.buttonText}>ABOUT</span>
        </button>
      </section>
      <section className={styles.buttonContainer}>
        <button className={styles.backButton} onClick={goBackHome}>
          Back to Home
        </button>
      </section>
    </main>
  );
};

export default FruitAi;
