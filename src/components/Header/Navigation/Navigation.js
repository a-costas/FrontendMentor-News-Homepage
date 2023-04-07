import React from "react";

import FocusLock from "react-focus-lock";

import styles from "./Navigation.module.css";

function Navigation({ handleDismiss, children }) {
  return (
    <FocusLock returnFocus={true}>
      <div className={styles.wrapper}>
        <div className={styles.backdrop} onClick={handleDismiss}>
          <div className={styles.navigation}>
            <button className={styles.closeBtn} onClick={handleDismiss}>
              <img
                src="assets/images/icon-menu-close.svg"
                alt="Hamburger Menu Button"
                aria-hidden="true"
                onClick={handleDismiss}
              />
            </button>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </FocusLock>
  );
}

export default Navigation;
