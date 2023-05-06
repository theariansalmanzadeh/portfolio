import React from "react";
import styles from "../../styles/Experiences.module.css";

function Experieces() {
  return (
    <div className={styles.Experiences}>
      <h3>
        Experieces <span>timeLine</span>
      </h3>
      <div className={styles.ExpWrapper}>
        <div>
          <div className={styles.timeLine}>
            <p>2018-2021</p>
          </div>
          <div className={styles.title}>
            <h5>Epra</h5>
            <p>embedded system developer</p>
          </div>
        </div>
        <div>
          <div className={styles.timeLine}>
            <p>2021-2022</p>
          </div>
          <div className={styles.title}>
            <h5>Hana</h5>
            <p>embedded system developer</p>
          </div>
        </div>
        <div>
          <div className={styles.timeLine}>
            <p>2022-2023</p>
          </div>
          <div className={styles.title}>
            <h5>freelancing</h5>
            <p>embedded system</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experieces;
