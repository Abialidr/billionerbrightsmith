import React from "react";
import styles from "./index.module.scss";
const Hero = () => {
  return (
    <>
      <div className={styles.main}>
        <img
          className={styles.secImg}
          src="/landing-page/hero2.png"
          alt="second img"
        />
        <h1>
          Welcome to <br /> Billionaires Bridesmaid
        </h1>
        <p>Where Love Meets Luxury: Step into the World of Billionaire Bride</p>
      </div>
    </>
  );
};

export default Hero;
