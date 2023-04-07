import React from "react";

import VisuallyHidden from "../../VisuallyHidden/VisuallyHidden";

import styles from "./OtherArticles.module.css";

function OtherArticles() {
  return (
    <div className={styles.wrapper}>
      <VisuallyHidden>More Articles</VisuallyHidden>
      <div className={styles.article}>
        <img src="assets/images/image-retro-pcs.jpg" alt="Retro PC" />
        <div className={styles.content}>
          <h1>01</h1>
          <h2>Reviving Retro PCs</h2>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className={styles.article}>
        <img src="assets/images/image-top-laptops.jpg" alt="Top laptops" />
        <div className={styles.content}>
          <h1>02</h1>
          <h2>Top 10 Laptops of 2022</h2>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className={styles.article}>
        <img src="assets/images/image-gaming-growth.jpg" alt="Gaming growth" />
        <div className={styles.content}>
          <h1>03</h1>
          <h2>The Growth of Gaming</h2>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default OtherArticles;
