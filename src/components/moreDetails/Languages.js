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
          <svg
            id="svg"
            viewBox="0 0 200 200"
            width="6rem"
            className={styles.circle}
          >
            <path
              id="p"
              fill="#eb4a4c"
              stroke="black"
              d="M100 100m-96,0a96,96,0 1,0 192,0a 96,96 0 1,0 -192,0zM100 100m-80,0a80,80,0 0,1 160,0a 80,80 0 0,1 -160,0z"
            />
            <text>100%</text>
          </svg>

          <p>Persian</p>
        </div>
        <div className={styles.langWrapper}>
          <svg
            id="svg"
            viewBox="0 0 200 200"
            width="6rem"
            className={styles.circle}
          >
            <path
              id="p"
              fill="#eb4a4c"
              stroke="black"
              d="M100 100m-96,0a96,96,0 1,0 192,0a 96,96 0 1,0 -192,0zM100 100m-80,0a80,80,0 0,1 160,0a 80,80 0 0,1 -160,0z"
            />
            <text>70%</text>
          </svg>
          <p>English</p>
        </div>

        <div className={styles.langWrapper}>
          <svg
            id="svg"
            viewBox="0 0 200 200"
            width="6rem"
            className={styles.circle}
          >
            <path
              className={styles.donut}
              // strokeDasharray={600}
              // strokeDashoffset={600}
              id="p"
              fill="#eb4a4c"
              strokeOpacity={1}
              stroke="#eb4a4c"
              d="M100 100m-96,0a96,96,0 1,0 192,0a 96,96 0 1,0 -192,0zM100 100m-80,0a80,80,0 0,1 160,0a 80,80 0 0,1 -160,0z"
            />
            <text>30%</text>
          </svg>

          <p>German</p>
        </div>
      </div>
    </div>
  );
}

export default Languages;
