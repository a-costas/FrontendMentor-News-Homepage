import React, { useEffect, useState } from "react";

import useToggle from "../../hooks/use-toggle";
import Navigation from "./Navigation/Navigation";

import styles from "../Header/Header.module.css";

function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 375);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className={styles.navigation}>
      <a aria-label="W logo" href="/">
        <img
          className={styles.logo}
          src="assets/images/logo.svg"
          alt="W logo"
        />
      </a>

      <nav role="navigation" aria-label="Main menu" className={styles.right}>
        <button
          aria-expanded={isMenuOpen}
          className={styles.hamburgerBtn}
          onClick={toggleIsMenuOpen}
        >
          <img src="assets/images/icon-menu.svg" alt="Hamburger Menu Button" />
        </button>
        {isMobile ? (
          <>
            {isMenuOpen && (
              <Navigation handleDismiss={toggleIsMenuOpen}>
                <ul className={styles.navigationList}>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#New">New</a>
                  </li>
                  <li>
                    <a href="#Popular">Popular</a>
                  </li>
                  <li>
                    <a href="#Trending">Trending</a>
                  </li>
                  <li>
                    <a href="#Categories">Categories</a>
                  </li>
                </ul>
              </Navigation>
            )}
          </>
        ) : (
          <ul className={styles.navigationList}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#New">New</a>
            </li>
            <li>
              <a href="#Popular">Popular</a>
            </li>
            <li>
              <a href="#Trending">Trending</a>
            </li>
            <li>
              <a href="#Categories">Categories</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Header;
