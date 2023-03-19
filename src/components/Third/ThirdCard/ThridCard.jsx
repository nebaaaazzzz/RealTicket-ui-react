import React from "react";
import styles from "./thirdcard.module.css";
import transferRisk from "../../../assets/images/transferRisk.982140b4.png";
import Image from "../Image";
function ThridCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>Transfer risk</h3>
        <p className={styles.left_p}>
          There's no way to identify duplicates and fraudulent tickets.
        </p>
      </div>
      <div className={styles.right}>
        <Image path={transferRisk} />
      </div>
    </div>
  );
}

export default ThridCard;
