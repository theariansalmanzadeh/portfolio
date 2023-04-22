import React, { useState } from "react";
import styles from "../styles/aboutMe.module.css";

function Details({ ModalHandler }) {
  return (
    <div className={styles.detailWrapper}>
      <h2>
        Arian <span>Salmanzadeh</span>
      </h2>
      <div className={styles.specialWrapper}>
        <p className={styles.subHeading}>specialist in</p>
        <ul className={styles.majorField}>
          <li>blockchain</li>
          <li>web Dev</li>
          <li>FrontEnd</li>
          <li>DeFi expert</li>
        </ul>
      </div>
      <p style={{ marginTop: "1.5rem" }}>
        My name is <span>Arian Salmanzadeh</span>. I am a blockchain developer,
        and I'm very passionate and dedicated to my work. starting With embedded
        development (c and c++) i dedicated to become a developer and devoted my
        time to be best in this field
      </p>
      <button
        onClick={() => {
          ModalHandler(true);
        }}
      >
        know me more
      </button>
    </div>
  );
}

export default Details;
