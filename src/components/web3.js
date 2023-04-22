import React from "react";
import styles from "../styles/portfolioWeb3.module.css";
import project1 from "../images/crypto.png";
import project2 from "../images/TWT.png";
import project3 from "../images/lendify.png";

function web3({ modalHandler }) {
  const projectPreviewHandler = (e) => {
    if (!e.target.className.includes("porject-web3")) return;
    const project = e.target.id;
    modalHandler(project);
  };

  return (
    <div className={styles.projects} onClick={projectPreviewHandler}>
      <div>
        <img
          className="porject-web3"
          id="3"
          src={project1}
          alt="web3 first project"
        />
      </div>
      <div>
        <img
          className="porject-web3"
          id="4"
          src={project2}
          alt="web3 second project"
        />
      </div>
      <div>
        <img
          className="porject-web3"
          id="5"
          src={project3}
          alt="web3 third project"
        />
      </div>
    </div>
  );
}

export default web3;
