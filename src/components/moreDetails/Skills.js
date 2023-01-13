import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "../../styles/Skills.module.css";
import { skills } from "../preview/projectDetails";

function Skills() {
  const SectionRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);

  const styleClasses = isIntersecting
    ? `${styles.progressAnim} ${styles.progress}`
    : `${styles.progress}`;

  const diverCallBack = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log("ok");
    setIsIntersecting(true);
  };
  const observerOption = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  }, []);

  useEffect(() => {
    const dividerObserver = new IntersectionObserver(
      diverCallBack,
      observerOption
    );

    dividerObserver.observe(SectionRef.current);
  }, [observerOption]);

  return (
    <div className={styles.skills}>
      <h3>Skills</h3>

      <div className={styles.skillsWrapper} ref={SectionRef}>
        {skills.map((skill, indx) => {
          return (
            <div className={styles.skill} key={indx}>
              <div className={styles.skillName}>
                <p>{skill.name}</p>
                <p>{skill.perc}%</p>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styleClasses}
                  style={{ width: `${skill.perc}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
