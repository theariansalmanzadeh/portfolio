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
            <p>2014-2016</p>
          </div>
          <div className={styles.title}>
            <h5>Mehraeen school</h5>
            <p>Diploma</p>
          </div>
        </div>
        <div>
          <div className={styles.timeLine}>
            <p>2014-2016</p>
          </div>
          <div className={styles.title}>
            <h5>Science and Research university</h5>
            <p>Bachoular degree</p>
          </div>
        </div>
        <div>
          <div className={styles.timeLine}>
            <p>2014-2016</p>
          </div>
          <div className={styles.title}>
            <h5>Vienna university</h5>
            <p>Master degree</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experieces;
