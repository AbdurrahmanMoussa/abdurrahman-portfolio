import React from "react";
import { Person, Mail, GitHub } from "@material-ui/icons";
import styles from "./header.module.scss";
import Link from "next/link";

type Props = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ menuOpen, setMenuOpen }: Props) => {
  let topBarStyles = styles.topbar;
  if (menuOpen) {
    topBarStyles = `${styles.topbar} ${styles.active}`;
  }

  return (
    <header>
      <div className={topBarStyles}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <a className={styles.logo}>AM</a>
            <div className={styles.itemContainer}>
              <Person className={styles.icon} />
              <span>+1-(613)-897-8878</span>
            </div>
            <Link
              className={styles.mailLink}
              href="mailto:abdurrahmanmoussa08@outlook.com"
            >
              <div className={styles.itemContainer}>
                <Mail className={styles.icon} />
                <span>Email</span>
              </div>
            </Link>
            <Link
              className={styles.githubLink}
              href="https://github.com/AbdurrahmanMoussa"
            >
              <div className={styles.itemContainer}>
                <GitHub className={styles.icon} />
                <span>GitHub</span>
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <div
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
              <span className={styles.line3}></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
