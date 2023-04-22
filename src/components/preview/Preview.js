import React from "react";
import styles from "../../styles/preview.module.css";
import { projects } from "./projectDetails";
import { BsGithub } from "react-icons/bs";

function Preview({ id, ModalHandler }) {
  const project = projects[id];

  return (
    <div className={styles.preview}>
      <button
        className={styles.closeBtn}
        onClick={() => {
          ModalHandler(false);
        }}
      >
        &times;
      </button>
      <div className={styles.imgWrapper}>
        <img
          className="porject-web2"
          id="linkedIn"
          src={`/images/${project.img}`}
          alt="web2 second project"
        />
      </div>
      <div>
        <h4>
          Project <span>Details</span>
        </h4>
        <p className={styles.title}>{project.title}</p>
        <p className={styles.description}>{project.aboutProject}</p>
        <p>Technology involved</p>
        <ul>
          {project.techs.map((tech, indx) => {
            return <li key={indx}>{tech}</li>;
          })}
        </ul>
        <div className={styles.projectInterActions}>
          <a href={project.projectLink} rel="noreferrer" target="_blank">
            view Project
          </a>
          <a href={project.projectGithub} rel="noreferrer" target="_blank">
            see code on GitHub <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Preview;
