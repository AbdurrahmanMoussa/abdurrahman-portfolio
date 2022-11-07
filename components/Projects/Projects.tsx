import React from "react";
import ProjectItem from "./ProjectItem";
import getProjectInfo from "../../utils/getProjectInfo";
import styles from "./projects.module.scss";

type Props = {};

const Projects = (props: Props) => {
  const project = getProjectInfo.map((project: any) => (
    <ProjectItem
      key={project.name}
      name={project.name}
      description={project.description}
      image={project.image}
      links={project.link}
    />
  ));

  console.log(project);

  return (
    <div className={styles.container}>
      <h3>Projects</h3>
      <div className={styles.projectGrid}>{project}</div>
    </div>
  );
};

export default Projects;
