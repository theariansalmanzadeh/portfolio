import React from "react";
import styles from "../../styles/Education.module.css";

function Education() {
  return (
    <div className={styles.Education}>
      <h3>Educations</h3>
      <div className={styles.eduWrapper}>
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
            <h5 className={styles.uni}>Science and Research university</h5>
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

export default Education;
