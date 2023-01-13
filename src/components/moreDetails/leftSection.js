import React from "react";
import profile from "../../images/arian.jpg";
import {
  MdOutlineComputer,
  MdCalendarToday,
  MdOutlineMailOutline,
} from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import styles from "../../styles/moreDetail.module.css";

function LeftSection() {
  return (
    <div className={styles.authorSection}>
      <div>
        <img src={profile} alt="the creater" />
        <p>
          Arian <span>Salmanzadeh</span>
        </p>
        <p className={styles.title}>blockchain dev</p>
      </div>
      <ul className={styles.listItems}>
        <li>
          <span>
            <MdOutlineComputer className={styles.icon} />
          </span>
          <p>Arian</p>
        </li>
        <li>
          <span>
            <MdCalendarToday className={styles.icon} />
          </span>
          <p>1998/1/4</p>
        </li>
        <li>
          <span>
            <SlLocationPin className={styles.icon} />
          </span>
          <p>Tehran,Iran</p>
        </li>
        <li>
          <span>
            <MdOutlineMailOutline className={styles.icon} />
          </span>
          <p>arian.web3developer@gmail.com</p>
        </li>
      </ul>
    </div>
  );
}

export default LeftSection;
