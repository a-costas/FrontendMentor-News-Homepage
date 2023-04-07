import React from "react";

import Header from "../Header/Header";
import MainArticle from "../Main/MainArticle";
import NewArticles from "../Main/NewArticles/NewArticles";
import OtherArticles from "../Main/OtherArticles/OtherArticles";

import styles from "../App/App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.articles}>
        <div className={styles.first}>
          <MainArticle />
          <NewArticles />
        </div>
        <div className={styles.second}>
          <OtherArticles />
        </div>
      </main>
    </div>
  );
}

export default App;
