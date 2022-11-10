import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/App.module.scss";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import ContactForm from "../components/Contact/ContactForm";
import { useState } from "react";

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Abdurrahman Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className={styles.app}>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={styles.sections}>
          <section id="home">
            <Hero />
          </section>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <section id="skills">
            <Skills />
          </section>
          <section id="portfolio">
            <Projects />
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </div>
      </div>

      {/* Hero */}
      {/* About */}
      {/* Skills */}
      {/* Experience */}
      {/* Contact ME */}
    </div>
  );
};

export default Home;
