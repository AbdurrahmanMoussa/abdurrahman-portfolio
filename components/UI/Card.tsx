import React from "react";
import styles from "./card.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <div className={`${styles.card} ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Card;
