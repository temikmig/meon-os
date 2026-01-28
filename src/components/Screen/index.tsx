import screen from "@/assets/wallpapers/1.jpg";
import styles from "./Screen.module.css";
import { type FC, useEffect, useRef, useState } from "react";
import { Homescreen } from "../Homescreen";
import { Lockscreen } from "../Lockscreen";
import { CurrentApp } from "../CurrentApp";

interface ScreenProps {
  isLocked: boolean;
  setIsLocked: (v: boolean) => void;
  isActive: boolean;
  currentApp?: React.ReactNode;
  setCurrentApp: (app: React.ReactNode | null) => void;
}

const UNLOCK_THRESHOLD = 140;
const UNLOCK_ANIMATION = 420;

export const Screen: FC<ScreenProps> = ({
  isLocked,
  setIsLocked,
  isActive,
  currentApp,
  setCurrentApp,
}) => {
  const startY = useRef(0);
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [appOpening, setAppOpening] = useState(false);

  const blurProgress = Math.min(offset / UNLOCK_THRESHOLD, 1);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!isLocked || unlocking) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startY.current = e.clientY;
    setAnimating(false);
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isLocked || unlocking || !dragging) return;
    const delta = startY.current - e.clientY;
    if (delta > 0) setOffset(delta);
  };

  const finishDrag = (e: React.PointerEvent) => {
    if (!isLocked) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      return;
    }
    setDragging(false);

    if (offset > UNLOCK_THRESHOLD) {
      setUnlocking(true);
      setAnimating(true);
      setOffset(window.innerHeight);

      setTimeout(() => {
        setIsLocked(false);
        setAnimating(false);
        setUnlocking(false);
      }, UNLOCK_ANIMATION);
    } else {
      setAnimating(true);
      setOffset(0);
    }
  };

  useEffect(() => {
    if (isLocked) {
      const t = setTimeout(() => {
        setOffset(0);
        setAnimating(false);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [isLocked]);

  useEffect(() => {
    if (currentApp) {
      const t = setTimeout(() => {
        setAppOpening(true);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [currentApp]);

  if (!isActive) return <div className={styles.screen} />;

  return (
    <>
      <CurrentApp
        app={currentApp}
        isOpen={appOpening}
        onClose={() => setCurrentApp(null)}
      />
      <div
        className={styles.screen}
        style={{
          backgroundImage: `url(${screen})`,
        }}
      >
        <div
          className={styles.homeWrapper}
          style={{
            opacity: isLocked ? 0 : 1,
            transform: isLocked ? "scale(0.96)" : "scale(1)",
            transition: "opacity .35s ease, transform .35s ease",
            pointerEvents: isLocked ? "none" : "auto",
          }}
        >
          <Homescreen />
        </div>
        <div
          className={styles.blurLayer}
          style={{
            backdropFilter: `blur(${12 * blurProgress}px)`,
            WebkitBackdropFilter: `blur(${12 * blurProgress}px)`,
          }}
        />
        {isLocked && (
          <div
            className={styles.lockWrapper}
            style={{
              cursor: dragging ? "grabbing" : "grab",
              transform: `translateY(-${offset}px)`,
              transition: animating
                ? "transform .42s cubic-bezier(.2,.8,.2,1)"
                : "none",
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
          >
            <Lockscreen setIsLocked={setIsLocked} />
          </div>
        )}
      </div>{" "}
    </>
  );
};
