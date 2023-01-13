import React, { useState } from "react";
import Details from "./details.js";
import DetailModal from "./DetailModal.js";
import styles from "../styles/aboutMe.module.css";
import { motion } from "framer-motion";

function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const ModalHandler = (state) => {
    console.log(state);
    setShowModal(state);
  };

  return (
    <React.Fragment>
      {showModal && <DetailModal ModalHandler={ModalHandler} />}
      <motion.div
        className={styles.aboutme}
        initial={{ opacity: 0, transform: "translateX(-5rem)" }}
        animate={{ opacity: 1, transform: "translateX(0rem)" }}
        exit={{
          opacity: 0,
          transform: "translateX(-5rem)",
          transition: { duration: 0.3 },
        }}
      >
        <div className={styles.profileImg}>
          <div className={styles.imgWrapper}>
            <img src="./images/arian.jpg" alt="designer" />
            <div className={styles.overlay}></div>
          </div>
        </div>
        <Details ModalHandler={ModalHandler} />
      </motion.div>
    </React.Fragment>
  );
}

export default AboutMe;
