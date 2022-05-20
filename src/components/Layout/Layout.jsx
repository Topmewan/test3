import React from "react";
import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
