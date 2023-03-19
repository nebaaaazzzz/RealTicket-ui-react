import React from "react";
import styles from "./firstcard.module.css";
import FeeGouging from "../../../assets/images/feeGouging.11513ef5.png";
import Image from "../Image";
function FirstCard({ title, subtitle }) {
  return (
    <div className={styles.bottom_first}>
      <div className={styles.bottom_first_left}>
        <h3
          className={styles.bottom_first_left_header}
          style={{
            color: "#d7f3f6",
            fontWeight: "bold",
          }}
        >
          Free Gouging
        </h3>
        <p
          className={styles.bottom_first_left_p}
          style={{
            marginTop: "1.5rem",
            maxWidth: "450px",
          }}
        >
          90% of tickets are marked up before they ever reach event goers
        </p>
      </div>
      <div className={styles.bottom_first_right}>
        <Image path={FeeGouging} />
      </div>
    </div>
  );
}

export default FirstCard;
