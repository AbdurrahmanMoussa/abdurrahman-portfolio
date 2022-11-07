import React from "react";
import styles from "./closeMenu.module.scss";

type Props = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const CloseMenu = ({ setMenuOpen, children }: Props) => {
  return (
    <div>
      <li
        onClick={() => {
          setMenuOpen(false);
        }}
        className={styles.list}
      >
        {children}
      </li>
    </div>
  );
};

export default CloseMenu;
