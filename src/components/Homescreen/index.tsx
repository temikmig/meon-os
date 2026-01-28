import styles from "./Homescreen.module.css";
import { AppsContainer } from "../AppsContainer";
import { PinnedContainer } from "../PinnedContainer";
import { Header } from "../Header";

export const Homescreen = () => {
  return (
    <div className={styles.homescreen}>
      <Header />
      <div className={styles.body}>
        <AppsContainer />
        <PinnedContainer />
      </div>
    </div>
  );
};
