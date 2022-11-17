import React from "react";
import CloseMenu from "./CloseMenu";
import Link from "next/link";
import styles from "./menu.module.scss";

type Props = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ menuOpen, setMenuOpen }: Props) => {
  const menuStyles = menuOpen ? `${styles.menu} ${styles.active}` : styles.menu;
  return (
    <div className={menuStyles}>
      <ul>
        <CloseMenu setMenuOpen={setMenuOpen}>
          <Link href="#hero">Home</Link>
        </CloseMenu>
        <CloseMenu setMenuOpen={setMenuOpen}>
          <Link href="#portfolio">Portfolio</Link>
        </CloseMenu>
        <CloseMenu setMenuOpen={setMenuOpen}>
          <Link href="#skills">Skills</Link>
        </CloseMenu>
        <CloseMenu setMenuOpen={setMenuOpen}>
          <Link href="#contact">Contact</Link>
        </CloseMenu>
      </ul>
    </div>
  );
};

export default Menu;
