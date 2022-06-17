import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { InputSearch } from "./../../components/InputSearch/InputSearch";
import styles from "./index.module.css";

export const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarHeader}>
        <button className={styles.burgerMenu}>
          <MenuOutlined />
        </button>
        <InputSearch />
      </div>
    </div>
  );
};
