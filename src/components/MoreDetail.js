import React from "react";
import styles from "../styles/moreDetail.module.css";

import LeftSection from "./moreDetails/leftSection";
import RightSection from "./moreDetails/rightSection";

function MoreDetail({ ModalHandler }) {
  return (
    <div className={styles.moreDetail}>
      <button
        className={styles.closeBtn}
        onClick={() => {
          ModalHandler(false);
        }}
      >
        &times;
      </button>
      <div className={styles.detailWrapper}>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default MoreDetail;
