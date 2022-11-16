import React from "react";
import styles from "./skills.module.scss";
import SkillItem from "./SkillItem";
import getSkillsInfo from "../../utils/getSkillsInfo";
import { useInView } from "react-intersection-observer";
import Card from "../UI/Card";

const Skills = () => {
  const { ref, inView: displayGridAnimation } = useInView();

  const skillsInfo = getSkillsInfo.map((skill) => (
    <SkillItem key={skill.name} skill={skill.name} image={skill.image} />
  ));
  return (
    <div id="skills" className={styles.container}>
      <h3
        className={`${styles.header} ${
          displayGridAnimation ? styles.skillsGridAnimated : ""
        }`}
      >
        Skills
      </h3>

      <div
        className={`${styles.skillsGrid} ${
          displayGridAnimation ? styles.skillsGridAnimated : ""
        }`}
        ref={ref}
      >
        {skillsInfo}
      </div>
    </div>
  );
};

export default Skills;
