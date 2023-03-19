import React from "react";
import Image from "../Image";
import styles from "./fourthcard.module.css";
import weakEventNavigation from "../../../assets/images/weakEventNavigation.607a8475.png";
function FourthCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>Weak event navigation</h3>
        <p className={styles.left_p}>
          Fan experiences often start confusingly and end abruptly
        </p>
      </div>
      <div className={styles.right}>
        <Image path={weakEventNavigation} />
      </div>
    </div>
  );
}

export default FourthCard;
