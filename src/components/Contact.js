import React from "react";
import EmailForm from "./emailForm.js";
import styles from "../styles/contact.module.css";
import { SlLocationPin, SlSocialInstagram } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className={styles.contactSection}
      initial={{ opacity: 0, transform: "translateX(-5rem)" }}
      animate={{ opacity: 1, transform: "translateX(0rem)" }}
      exit={{
        opacity: 0,
        transform: "translateX(-5rem)",
        transition: { duration: 0.3 },
      }}
    >
      <h2>
        {" "}
        Get in <span>Touch</span>
      </h2>
      <div className={styles.infos}>
        <div className={styles.infoWrapper}>
          <div className={styles.infoSection}>
            <p>
              <FaPhone className={styles.icon} />
              <span>+98 9128347484</span>
            </p>
          </div>
          <div className={styles.infoSection}>
            <p>
              <HiOutlineMail className={styles.icon} />
              <span>arian.web3developer@gmail.com</span>
            </p>
          </div>
          <div className={styles.infoSection}>
            <p>
              <SlLocationPin className={styles.icon} />
              <span>Tehran,Iran</span>
            </p>
          </div>
          <div className={styles.infoSection}>
            <p>
              <SlSocialInstagram className={styles.icon} />
              <span>theariansalmanzadeh</span>
            </p>
          </div>
        </div>
        <EmailForm />
      </div>
    </motion.div>
  );
}

export default Contact;
