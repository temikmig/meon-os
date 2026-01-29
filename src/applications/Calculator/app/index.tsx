import { useState } from "react";
import clsx from "clsx";
import { Header } from "@/components/Header";
import styles from "./app.module.css";

export const App = () => {
  const [input, setInput] = useState("0");

  const handleButtonClick = (btn: string) => {
    if (btn === "C") {
      setInput("0");
    } else {
      setInput((prev) => (prev === "0" ? btn : prev + btn));
    }
  };

  const handleResult = () => {
    try {
      const sanitizedInput = input.replace(/×/g, "*").replace(/÷/g, "/");

      const result = eval(sanitizedInput);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.calculatorDisplay}>{input}</div>
      <div className={styles.calculatorButtons}>
        {[
          "C",
          "±",
          "%",
          "÷",
          "7",
          "8",
          "9",
          "×",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          ".",
          "0",
        ].map((btn) => (
          <div
            key={btn}
            className={clsx(
              styles.calculatorButton,
              btn.includes("C") ||
                btn.includes("±") ||
                btn.includes("%") ||
                btn.includes("÷") ||
                btn.includes("×") ||
                btn.includes("-") ||
                btn.includes("+")
                ? styles.calculatorButtonAction
                : null,
              "liquid-glass",
            )}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </div>
        ))}
        <div
          className={clsx(
            styles.calculatorButton,
            styles.calculatorResult,
            styles.calculatorButtonAction,
            "liquid-glass",
          )}
          onClick={handleResult}
        >
          =
        </div>
      </div>
    </div>
  );
};
