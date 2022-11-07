import React from "react";
import Image from "next/image";
import styles from "./skillItem.module.scss";

type Props = {
  skill: string;
  image: string;
};

const SkillItem = ({ skill, image }: Props) => {
  return (
    <div className={styles.container}>
      <h1>{skill}</h1>
      <Image
        src={image}
        alt=""
        width={100}
        height={100}
        className={styles.imgBackground}
      ></Image>
    </div>
  );
};

export default SkillItem;
