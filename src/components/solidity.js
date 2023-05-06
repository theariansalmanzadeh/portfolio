import React from "react";
import styles from "../styles/solditiy.module.css";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Solidity() {
  return (
    <div className={styles.Electronics}>
      <h3 className={styles.header}>Solidity</h3>
      <p className={styles.subHeading}>
        these project contain only solidity (more projects in remix workspace)
      </p>
      <div className={styles.wrapper}>
        <div className={styles.project}>
          <p>1. NFT Airdrop</p>
          <Link to="https://github.com/theariansalmanzadeh/nft-airdrop">
            <BsGithub />
            github view
          </Link>
        </div>
        <div className={styles.project}>
          <p>2. ICO</p>
          <Link to="https://github.com/theariansalmanzadeh/ICO">
            <BsGithub />
            github view
          </Link>
        </div>
        <div className={styles.project}>
          <p>3. DAO</p>
          <Link to="https://github.com/theariansalmanzadeh/DAO">
            <BsGithub />
            github view
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Solidity;
