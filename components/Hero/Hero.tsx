import React, { useEffect, useRef } from "react";
import styles from "./hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import { init } from "ityped";

type Props = {};

const Hero = (props: Props) => {
  const textRef = useRef<string | HTMLSpanElement | any>(null);

  useEffect(() => {
    init(textRef.current !== null ? textRef.current : "", {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer", "Fullstack Developer", "Web Developer"],
    });
  }, []);

  return (
    <div className={styles.intro} id="intro">
      <div className={styles.card}>
        <div className={styles.inner}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h2>Welcome, I am</h2>
              <h1>Abdurrahman Moussa</h1>
              <h3 className={styles.typedCursor} id="myElement">
                I am a <span ref={textRef}></span>
              </h3>
              <p className={styles.paragraph}>
                <span>
                  I specialize in creating incredible digital experiences.{" "}
                </span>
                <span>
                  My primary focus is on crafting clean and user-friendly
                  experiences.
                </span>
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
