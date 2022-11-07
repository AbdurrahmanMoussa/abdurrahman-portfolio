import React from "react";
import styles from "./skills.module.scss";
import SkillItem from "./SkillItem";
import getSkillsInfo from "../../utils/getSkillsInfo";

type Props = {};

const Skills = (props: Props) => {
  const skillsInfo = getSkillsInfo.map((skill) => (
    <SkillItem key={skill.name} skill={skill.name} image={skill.image} />
  ));
  return (
    <div id="skills" className={styles.container}>
      <h3 className={styles.header}>Skills</h3>

      <div className={styles.skillsGrid}>{skillsInfo}</div>
    </div>
  );
};

export default Skills;
