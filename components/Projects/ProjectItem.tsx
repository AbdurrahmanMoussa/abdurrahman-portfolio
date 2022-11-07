import React from "react";
import styles from "./projectItem.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  image: string;
  links: [string];
};

const ProjectItem = ({ name, description, image, links }: Props) => {
  const getLinks = links.map((link: any) => (
    <Link key={link.name} href={link.url}>
      <button className={styles.linkButton}>{link.name}</button>
    </Link>
  ));

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.overlay}>
          <Image
            className={styles.image}
            src={image}
            alt={""}
            width={300}
            height={150}
          />
        </div>
        <div className={styles.links}>{getLinks}</div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.titleContainer}>
          <h2>{name}</h2>
        </div>
        <div className={styles.body}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
