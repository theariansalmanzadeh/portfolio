import React from "react";
import styles from "../styles/contact.module.css";

function EmailForm() {
  return (
    <form className={styles.form}>
      <div>
        <input placeholder="name" type="text" required />
        <input placeholder="subject" type="text" required />
      </div>
      <textarea placeholder="message"></textarea>
      <button>send message</button>
    </form>
  );
}

export default EmailForm;
