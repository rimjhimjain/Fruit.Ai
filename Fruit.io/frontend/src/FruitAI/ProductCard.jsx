
import React from "react";
import styles from "./OrderSummary.module.css";

const ProductCard = ({ image, name, price, quantity, total }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productInfo}>
        <img
          loading="lazy"
          src={image}
          alt={name}
          className={styles.productImage}
        />
        <div className={styles.productDetails}>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productPrice}>${price.toFixed(2)}</div>
        </div>
      </div>
      <div className={styles.quantityControl}>
        <div className={styles.quantityButtons}>
          <button
            className={styles.quantityButton}
            aria-label="Decrease quantity"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edf8fb681a5969f099072e3aa89fe87506e1ed9c7eaf4539934168a23b200054?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
              alt=""
            />
          </button>
          <div>{quantity}</div>
          <button
            className={styles.quantityButton}
            aria-label="Increase quantity"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f2ed26270e3d974057194478a2619d6b5686d500c4fbc150dd80b6402119215?placeholderIfAbsent=true&apiKey=990951cee2cd4dd68c57c02a825e8377"
              alt=""
            />
          </button>
        </div>
        <div className={styles.totalPrice}>${total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
