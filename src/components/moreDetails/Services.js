import React from "react";
import styles from "../../styles/services.module.css";
import { FaCaretRight } from "react-icons/fa";

function Services() {
  return (
    <div className={styles.services}>
      <h3>
        Quality <span>services</span>
      </h3>
      <ul className={styles.servicesList}>
        <li>
          <span>
            <FaCaretRight />
          </span>
          <p>Website Development</p>
        </li>
        <li>
          <span>
            <FaCaretRight />
          </span>
          <p>Blockchain Development</p>
        </li>
        <li>
          <span>
            <FaCaretRight />
          </span>
          <p>Embedded systems Development</p>
        </li>
        <li>
          <span>
            <FaCaretRight />
          </span>
          <p>PCB designing</p>
        </li>
      </ul>
    </div>
  );
}

export default Services;
