import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";

function BurgerMenu({ menuHandler }) {
  return (
    <div className={styles.burgerMenu}>
      <ul onClick={() => menuHandler(false)}>
        <li className={styles.closeBtn}>&times;</li>
        <li>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              color: isActive ? "#eb4a4c" : "#fff",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio"
            style={({ isActive }) => ({
              color: isActive ? "#eb4a4c" : "#fff",
            })}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutme"
            style={({ isActive }) => ({
              color: isActive ? "#eb4a4c" : "#fff",
            })}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#eb4a4c" : "#fff",
            })}
          >
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
