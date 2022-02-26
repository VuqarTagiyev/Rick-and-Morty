import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      Made by{" "}
      <a className={styles.link} href="https://vugartaghiyev.netlify.app/">
        Vugar Taghiyev
      </a>
    </div>
  );
};

export default Footer;
