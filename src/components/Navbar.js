import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { RiMenu4Line } from "react-icons/ri";
import BurgerMenu from "./BurgerMenu.js";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const burgerMenuHandler = (event) => {
    setShowMenu(event);
  };

  return (
    <React.Fragment>
      {showMenu && <BurgerMenu menuHandler={burgerMenuHandler} />}
      <RiMenu4Line
        className={styles.burgerMenuBtn}
        onClick={() => {
          burgerMenuHandler(true);
        }}
      />
      <div className={styles.Navbar}>
        <ul>
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
    </React.Fragment>
  );
}

export default Navbar;
