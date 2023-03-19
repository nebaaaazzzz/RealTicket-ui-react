import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./fifth.module.css";
import laptopFold from "../../assets/images/laptop-fold.9a336450.png";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Fifth() {
  return (
    <div id="organizers" className={styles.container}>
      <div
        style={{
          width: "100%",
          maxWidth: "max(1600px, 90%)",
          marginLeft: "auto",
        }}
      >
        <div className={styles.top_container}>
          <div
            style={{
              opacity: 1,
            }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={styles.header}
            >
              Event organizers enjoy advanced control with the real ticket
              <span>Total Event Control Platform</span>
            </motion.h2>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_wrapper}>
            <Swiper
              style={{
                height: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                reverseDirection: false,
                delay: 2500,
                disableOnInteraction: false,
              }}
              sid
              pagination={{
                clickable: true,
              }}
              navigation={true}
            >
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.first_slide_p}>
                  <span>Control Over</span>
                  <br />
                  free-gouging
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.second_slide_p}>
                  Personalized
                  <br />
                  experience
                  <br />
                  <span>for event goers</span>
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.third_slide_p}>
                  <span>Event mapping</span>
                  <br />
                  and navigation
                  <br />
                  capablilities
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.fourth_slide_p}>
                  <span>RealBackup eliminates</span>
                  <br />
                  the fear of lost tickets
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.fifth_slide_p}>
                  <span>
                    Real-time metrics
                    <br />
                    with
                  </span>
                  detailed
                  <br />
                  customer analytices
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.sixth_slide_p}>
                  <span>control-over</span>
                  <br />
                  fee-gouging
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <img
            src={laptopFold}
            style={{
              width: "67%",
              objectFit: "contain",
              maxWidth: 1000,
              height: 680,
              backgroundSize: "100%",
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Fifth;
