import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import styles from "../styles/portfolio.module.css";
import profile from "../images/arian.jpg";
import { motion } from "framer-motion";
import Web2 from "./web2.js";
import Web3 from "./web3.js";
import Electronics from "./Electronics.js";
import PreviewModal from "./preview/PreviewModal";

function Portfolio() {
  const [showModal, setShowModal] = useState("");

  const modalHandler = (id) => {
    console.log("11");
    setShowModal(id);
  };

  return (
    <React.Fragment>
      {showModal !== "" && showModal !== false && (
        <PreviewModal id={showModal} ModalHandler={modalHandler} />
      )}
      <motion.div
        className={styles.Portfolio}
        initial={{ opacity: 0, transform: "translateX(-5rem)" }}
        animate={{ opacity: 1, transform: "translateX(0rem)" }}
        exit={{
          opacity: 0,
          transform: "translateX(-5rem)",
          transition: { duration: 0.3 },
        }}
      >
        <h2>
          My <span>Projects</span>
        </h2>
        <div>
          <ul className={styles.projectList}>
            <li>
              <Link to="web2">Web2</Link>
            </li>
            <li>
              <Link to="web3">Web3</Link>
            </li>
            <li>
              <Link to="electronics">Electronics</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/web2" element={<Web2 modalHandler={modalHandler} />} />
          <Route path="/web3" element={<Web3 modalHandler={modalHandler} />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/" end element={<Navigate to="web2" />} />
        </Routes>
      </motion.div>
    </React.Fragment>
  );
}

export default Portfolio;
