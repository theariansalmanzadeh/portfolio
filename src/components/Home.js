import React from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.homePage}
      initial={{ opacity: 0, transform: "translateX(-5rem)" }}
      animate={{ opacity: 1, transform: "translateX(0rem)" }}
      exit={{
        opacity: 0,
        transform: "translateX(-5rem)",
        transition: { duration: 0.3 },
      }}
    >
      <h1 className={styles.title}>
        <span>Arian</span> Salmanzadeh
      </h1>
      <div className={styles.Wrapper}>
        <div className={styles.animSection}>
          <p>I'm a</p>
          <ul className={styles.professions}>
            <li> FrontEnd Developer</li>
            <li> Web Developer</li>
            <li> Blockchain Developer</li>
            <li> DeFi expert</li>
          </ul>
        </div>
        <div>
          <button
            className={styles.HomeBtn}
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
