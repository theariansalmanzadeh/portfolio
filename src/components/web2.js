import React from "react";
import styles from "../styles/portfolio.module.css";
import project1 from "../images/tesla.jpg";
import project2 from "../images/house.jpg";
import project3 from "../images/likedIn.png";

function web2({ modalHandler }) {
  const projectPreviewHandler = (e) => {
    if (!e.target.className.includes("porject-web2")) return;
    const project = e.target.id;
    modalHandler(project);
  };

  return (
    <div className={styles.projects} onClick={projectPreviewHandler}>
      <div>
        <img
          className="porject-web2"
          id="0"
          src={project1}
          alt="web2 first project"
        />
      </div>
      <div>
        <img
          className="porject-web2"
          id="1"
          src={project2}
          alt="web2 second project"
        />
      </div>
      <div>
        <img
          className="porject-web2"
          id="2"
          src={project3}
          alt="web2 third project"
        />
      </div>
    </div>
  );
}

export default web2;
