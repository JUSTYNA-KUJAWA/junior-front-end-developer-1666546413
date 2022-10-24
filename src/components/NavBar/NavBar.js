import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.navLinks}>
        <ul className={styles.isExpanded}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
