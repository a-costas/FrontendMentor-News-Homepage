import React from "react";

import styles from "./NewArticles.module.css";

function NewArticles() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>New</h1>
      <div className={styles.newArticles}>
        <div className={styles.newArticle}>
          <h2>Hydrogen VS Electric Cars</h2>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className={styles.newArticle}>
          <h2>The Downsides of AI Artistry</h2>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className={styles.newArticle}>
          <h2>Is VC Funding Drying Up?</h2>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewArticles;
