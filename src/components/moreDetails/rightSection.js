import React from "react";
import styles from "../../styles/RightSection.module.css";
import AboutME from "./AboutME.js";
import Services from "./Services.js";
import Skills from "./Skills.js";
import Languages from "./Languages.js";
import Education from "./Education.js";
import Experieces from "./Experieces.js";
import Certificates from "./Certificates.js";
import FeedBacks from "./FeedBacks.js";

function RightSection() {
  return (
    <div className={styles.rightSection}>
      <AboutME />
      <Services />
      <Skills />
      <Languages />
      <Education />
      <Experieces />
      {/* <Certificates /> */}
      <FeedBacks />
    </div>
  );
}

export default RightSection;
