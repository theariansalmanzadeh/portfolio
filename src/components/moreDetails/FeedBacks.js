import React from "react";
import styles from "../../styles/FeedBacks.module.css";
import { FaQuoteLeft } from "react-icons/fa";

function FeedBacks() {
  return (
    <div className={styles.FeedBacks}>
      <h3>
        Client <span>FeedBacks</span>
      </h3>
      <div className={styles.quotesWrapper}>
        <FaQuoteLeft className={styles.quoteIcon} />
        <div className={styles.clientQuote}>
          <div className={styles.overlay}></div>

          <p>
            he openly taught and me everything about blockchain development nad
            all the coding needed for it
          </p>
        </div>
        <div className={styles.clientWrapper}>
          <img
            className={styles.clientImg}
            src="./images/client.jpg"
            alt="client"
          />
        </div>
      </div>
    </div>
  );
}

export default FeedBacks;
