import React from "react";
import styles from "./hero.module.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles.intro} id="intro">
      <div className={styles.card}>
        <div className={styles.inner}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h2>Welcome, I am</h2>
              <h1>Abdurrahman Moussa</h1>
              <h3 className={styles.typedCursor}>
                I am a Full Stack Developer
              </h3>
              <p className={styles.paragraph}>
                I specialize in creating incredible digital experiences. <br />{" "}
                My primary focus is on crafting clean and user-friendly
                experiences.
              </p>
              <div className={styles.buttonContainer}>
                <Link href="#portfolio" className={styles.work}>
                  Check Out My Work!
                  <Image
                    className={styles.arrow}
                    src="/down.png"
                    alt=""
                    width={50}
                    height={50}
                    priority
                    unoptimized={true}
                  ></Image>
                </Link>

                {/* <Link href="#skills" className={styles.arrow}></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
