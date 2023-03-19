import React from "react";
import styles from "./form.module.css";
import { motion } from "framer-motion";
function Form() {
  return (
    <form className={styles.container} id="request-demo">
      <div style={{ opacity: 1 }}>
        <motion.h2
          initial={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{ opacity: 1 }}
          className={styles.header}
        >
          It’s time to go live
        </motion.h2>
      </div>
      <div style={{ opacity: 1 }}>
        <motion.h6
          initial={{ opacity: 0 }}
          transition={{
            delay: 1.5,
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{ opacity: 1 }}
          className={styles.sub_header}
        >
          Be the first to know when realticket is coming to your town.
        </motion.h6>
      </div>
      <div className={styles.form_container}>
        <div
          style={{
            opacity: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 1.8,
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{ opacity: 1 }}
            className={styles.form_wrapper}
          >
            <input
              required
              type="email"
              className={styles.input}
              placeholder="Enter your email"
            />
            <button className={styles.button}>Request demo</button>
          </motion.div>
        </div>
      </div>
    </form>
  );
}

export default Form;
