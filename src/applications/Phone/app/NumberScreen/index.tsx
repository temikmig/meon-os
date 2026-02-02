import { PhoneIcon, BackspaceIcon } from "@/assets/icons";
import clsx from "clsx";
import { useState } from "react";
import styles from "./NumberScreen.module.css";

export const NumberScreen = () => {
  const [number, setNumber] = useState("");

  const handleButtonClick = (digit: string) => {
    setNumber((prev) => prev + digit);
  };

  return (
    <div className={styles.screenContainer}>
      <div className={styles.numberContainer}>{number}</div>
      <div className={styles.buttonsContainer}>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("1")}
        >
          1
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("2")}
        >
          2
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("3")}
        >
          3
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("4")}
        >
          4
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("5")}
        >
          5
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("6")}
        >
          6
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("7")}
        >
          7
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("8")}
        >
          8
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("9")}
        >
          9
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("*")}
        >
          *
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("0")}
        >
          0
        </div>
        <div
          className={clsx(styles.button, "liquid-glass")}
          onClick={() => handleButtonClick("#")}
        >
          #
        </div>
        <div
          className={clsx(styles.button, styles.phoneButton, "liquid-glass")}
        >
          <PhoneIcon fontSize={32} />
        </div>
        <div
          className={clsx(styles.button, styles.backspaceButton)}
          onClick={() => setNumber((prev) => prev.slice(0, -1))}
        >
          <BackspaceIcon fontSize={32} />
        </div>
      </div>
    </div>
  );
};
