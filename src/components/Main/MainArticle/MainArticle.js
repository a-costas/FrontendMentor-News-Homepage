import React from "react";

import styles from "./MainArticle.module.css";

function MainArticle() {
  return (
    <article className={styles.mainArticle}>
      <picture className={styles.image}>
        <source
          media="(max-width: 670px)"
          srcSet="assets/images/image-web-3-mobile.jpg"
        />
        <source
          media="(min-width: 671px)"
          srcSet="assets/images/image-web-3-desktop.jpg"
        />
        <img
          className="aside-image"
          src="assets/images/image-web-3-mobile.jpg"
          alt=""
        />
      </picture>
      <div className={styles.content}>
        <h1 className={styles.headline}> The Bright Future of Web 3.0?</h1>
        <div>
          <p className={styles.blurb}>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className={styles.readMore}>Read more</button>
        </div>
      </div>
    </article>
  );
}

export default MainArticle;
