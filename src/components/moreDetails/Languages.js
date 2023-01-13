import React from "react";
import styles from "../../styles/Languages.module.css";

function Languages() {
  return (
    <div className={styles.languages}>
      <h3>
        Languages <span>skills</span>
      </h3>
      <div className={styles.AllLangs}>
        <div className={styles.langWrapper}>
          <div className={styles.langSkill}>
            <p>100%</p>
          </div>
          <p>Persian</p>
        </div>
        <div className={styles.langWrapper}>
          <div className={styles.langSkill}>
            <p>70%</p>
          </div>
          <p>English</p>
        </div>
        <div className={styles.langWrapper}>
          <div className={styles.langSkill}>
            <p>40%</p>
          </div>
          <p>German</p>
        </div>
      </div>
    </div>
  );
}

export default Languages;
