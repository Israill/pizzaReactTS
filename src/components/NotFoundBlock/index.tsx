import React from "react";

import styles from "./notFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению данная страница отсутствует на нашем сайте</p>
    </div>
  );
};

export default NotFoundBlock;
