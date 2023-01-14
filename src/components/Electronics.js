import React from "react";
import styles from "../styles/electronics.module.css";
import { FaCaretRight } from "react-icons/fa";

function Electronics() {
  return (
    <div className={styles.Electronics}>
      <h3 className={styles.header}>Electronics</h3>
      <div>
        <div>
          {/* <h4>specialities</h4> */}
          <ul>
            <li>
              <FaCaretRight className={styles.icon} />
              PCB design upto 12 layers
            </li>
            <li>
              <FaCaretRight className={styles.icon} />
              STM32 microcontroller programming with C language
            </li>
            <li>
              <FaCaretRight className={styles.icon} />
              AVR programming with C language
            </li>
            <li>
              <FaCaretRight className={styles.icon} />
              Familiar with communication protocols (I2C,SPI,UART)
            </li>
            <li>
              <FaCaretRight className={styles.icon} />
              Familiar with RTOS(FreeRTOS)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Electronics;
