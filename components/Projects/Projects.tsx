import React from "react";
import ProjectItem from "./ProjectItem";
import getProjectInfo from "../../utils/getProjectInfo";
import styles from "./projects.module.scss";
import Card from "../UI/Card";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView: isVisible } = useInView();
  const project = getProjectInfo.map((project: any) => (
    <ProjectItem
      key={project.name}
      name={project.name}
      description={project.description}
      image={project.image}
      links={project.link}
    />
  ));

  return (
    <Card className={styles.card}>
      <div
        className={`${styles.container} ${
          isVisible ? styles.cardContainerAnimated : ""
        }`}
        ref={ref}
      >
        <h3 className={styles.header}>Projects</h3>
        <div className={styles.projectGrid}>{project}</div>
      </div>
    </Card>
  );
};

export default Projects;
