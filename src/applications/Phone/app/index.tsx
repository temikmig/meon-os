import { Header } from "@/components/Header";
import clsx from "clsx";
import { useState } from "react";

import styles from "./app.module.css";

export const App = () => {
  const [number, setNumber] = useState("");

  const handleButtonClick = (digit: string) => {
    setNumber((prev) => prev + digit);
  };

  return (
    <div className={styles.appCont}>
      <Header />
      <div className={styles.numberContainer}>{number}</div>
      <div className={styles.buttonsContainer}>
        <div className={styles.button} onClick={() => handleButtonClick("1")}>
          1
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("2")}>
          2
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("3")}>
          3
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("4")}>
          4
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("5")}>
          5
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("6")}>
          6
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("7")}>
          7
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("8")}>
          8
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("9")}>
          9
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("*")}>
          *
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("0")}>
          0
        </div>
        <div className={styles.button} onClick={() => handleButtonClick("#")}>
          #
        </div>
        <div className={clsx(styles.button, styles.phoneButton)}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0,0,256,256"
          >
            <g transform="scale(5.12,5.12)">
              <path
                fill="#fff"
                d="M39.03125,47c-0.01562,0 -0.03125,0 -0.04687,0c-7.51562,-0.24609 -16.32031,-7.53125 -22.38672,-13.60156c-6.07422,-6.07031 -13.35937,-14.87891 -13.59375,-22.35937c-0.08594,-2.625 6.35547,-7.29297 6.42188,-7.33984c1.67188,-1.16406 3.52734,-0.75 4.28906,0.30469c0.51563,0.71484 5.39844,8.11328 5.92969,8.95313c0.55078,0.87109 0.46875,2.16797 -0.21875,3.46875c-0.37891,0.72266 -1.63672,2.93359 -2.22656,3.96484c0.63672,0.90625 2.32031,3.12891 5.79688,6.60547c3.48047,3.47656 5.69922,5.16406 6.60938,5.80078c1.03125,-0.58984 3.24219,-1.84766 3.96484,-2.22656c1.28125,-0.67969 2.57031,-0.76562 3.44922,-0.22656c0.89844,0.55078 8.27734,5.45703 8.95703,5.92969c0.57031,0.40234 0.9375,1.08984 1.01172,1.89063c0.07031,0.80859 -0.17969,1.66406 -0.69922,2.41016c-0.04297,0.0625 -4.65625,6.42578 -7.25781,6.42578z"
              ></path>
            </g>
          </svg>
        </div>
        <div
          className={clsx(styles.button, styles.backspaceButton)}
          onClick={() => setNumber((prev) => prev.slice(0, -1))}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="36px"
            height="36px"
            viewBox="0,0,256,256"
            fill="#fff"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M12.54297,10l-12.85937,15l12.85938,15h33.45703c2.19922,0 4,-1.80078 4,-4v-22c0,-2.19922 -1.80078,-4 -4,-4zM13.45703,12h32.54297c1.11719,0 2,0.88281 2,2v22c0,1.11719 -0.88281,2 -2,2h-32.53906l-11.14453,-13zM22.70703,18.29297l-1.41406,1.41406l5.29297,5.29297l-5.29297,5.29297l1.41406,1.41406l5.29297,-5.29297l5.29297,5.29297l1.41406,-1.41406l-5.29297,-5.29297l5.29297,-5.29297l-1.41406,-1.41406l-5.29297,5.29297z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
