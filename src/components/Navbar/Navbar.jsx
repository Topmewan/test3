import React from "react";
import { IButton } from "./../../ui-kit";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/">
          <h1>Concert Club</h1>
        </Link>
        <div className={styles.action}>
          <IButton variant="light">Версия для слабовидящих</IButton>
          <IButton variant="light">Мой профиль</IButton>
        </div>
      </div>
    </div>
  );
};
