import React from "react";
import styles from "./FruitAI.module.css";
import Message from "./Message";
import ProductCard from "../FruitAI/ProductCard";
import style from "./OrderSummary.module.css";
import { useNavigate } from "react-router-dom";

const FruitAI = () => {
  const navigate = useNavigate();
  const messages = [
    {
      isAI: true,
      content: "Hi! Welcome to Fruit.AI. What can I help you with today?",
      timestamp: "10:30 AM",
    },
    {
      isAI: false,
      content: "I would like to place an order. Is it possible?",
      timestamp: "10:30 AM",
    },
    {
      isAI: true,
      content: "Yes. What fruits or vegetables would you like to order?",
      timestamp: "10:30 AM",
    },
    {
      isAI: false,
      content: "I want to order 2 oranges.",
      timestamp: "10:30 AM",
    },
    {
      isAI: true,
      content: "Great! Would you like to add anything else?",
      timestamp: "10:30 AM",
    },
    {
      isAI: false,
      content: "Yes, I want to add 1 cucumber and 4 tangerines.",
      timestamp: "10:30 AM",
    },
    {
      isAI: true,
      content: "Awesome! Here's your order summary:",
      timestamp: "10:30 AM",
    },
  ];

  const products = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/73d2998d12cf0b825e1ba72fed3541276efdbcf0cf43a16c68ed68b6aeeb01c1?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      name: "Orange",
      price: 8.0,
      quantity: 2,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f09803934882cbfa1f5b32956a4cd90c16d763839fa39a5a414eccb445bb83b?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      name: "Cucumber",
      price: 11.76,
      quantity: 1,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/203ac135c30037da88c9c15f307ca6822e4aa5b4598682f9fb36581108d8372a?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377",
      name: "Tangerine",
      price: 6.4,
      quantity: 4,
    },
  ];

  const repeatedMessages = [
    {
      isAI: true,
      content: "Would you like to add anything else now?",
      timestamp: "10:31 AM",
    },
    {
      isAI: true,
      content: "We have a special discount on apples today!",
      timestamp: "10:31 AM",
    },
    {
      isAI: false,
      content: "No, I'm good",
      timestamp: "10:31 AM",
    },
    {
      isAI: true,
      content: "Your order has been placed.",
      timestamp: "10:32 AM",
    },
    {
      isAI: true,
      content: "Feel free to browse more fruits.",
      timestamp: "10:32 AM",
    },
  ];

  const goBackHome = () => {
    navigate("/home");
  };
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.profileSection}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ecdc168724e470f5b8cdf6834b60073bcb0cb75d69d5a926cd3c82af44640a9?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
              alt="Back"
              className={styles.backIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f34868df04324a5915bf909f7c121d960ea7a5ddb7d76c31144f65cbf5427c27?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
              alt="John Doe's profile"
              className={styles.profilePic}
            />
            <h1 className={styles.userName}>John Doe</h1>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d44152bd2a363ef9ba66b029a75ef39a4359fa32a9d8eb303e40dba2b7476e4c?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
            alt="Menu"
            className={styles.menuIcon}
          />
        </div>
      </header>
      <hr className={styles.divider} />
      <time className={styles.dateIndicator}>17 September, Sunday</time>

      <section className={styles.chatContainer}>
        {messages.map((msg, index) => (
          <Message
            key={index}
            isAI={msg.isAI}
            content={msg.content}
            timestamp={msg.timestamp}
          />
        ))}
      </section>

      <section className={style.container}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            total={product.price * product.quantity}
          />
        ))}
      </section>

      {/* Render repeated messages here */}
      <section className={styles.chatContainer}>
        {repeatedMessages.map((msg, index) => (
          <Message
            key={index}
            isAI={msg.isAI}
            content={msg.content}
            timestamp={msg.timestamp}
          />
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

export default FruitAI;
