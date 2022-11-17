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
    <div className={styles.container}>
      <h3 className={styles.header}>Projects</h3>
      <div
        className={`${styles.projectGrid} ${
          isVisible ? styles.cardContainerAnimated : ""
        }`}
        ref={ref}
      >
        {project}
      </div>
    </div>
  );
};

export default Projects;
