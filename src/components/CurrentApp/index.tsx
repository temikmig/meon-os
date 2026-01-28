import { type FC, type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./CurrentApp.module.css";
import { SwipeLine } from "../SwipeLine";

const START_ZONE = 80;
const CLOSE_THRESHOLD = 140;
const CLOSE_ANIMATION = 420;

interface CurrentAppProps {
  app?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const CurrentApp: FC<CurrentAppProps> = ({ app, isOpen, onClose }) => {
  const startY = useRef(0);
  const closeTimer = useRef<number | null>(null);

  const [offsetY, setOffsetY] = useState(40);
  const [dragging, setDragging] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!isOpen || !app) return;

    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    const raf = requestAnimationFrame(() => {
      setAnimating(false);
      setOffsetY(40);
      setEntered(false);

      requestAnimationFrame(() => {
        setAnimating(true);
        setOffsetY(0);
        setEntered(true);
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [isOpen, app]);

  const onPointerDown = (e: React.PointerEvent) => {
    const bottomDistance = window.innerHeight - e.clientY;
    if (bottomDistance > START_ZONE) return;

    startY.current = e.clientY;
    setDragging(true);
    setAnimating(false);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;

    const delta = startY.current - e.clientY;
    if (delta > 0) setOffsetY(delta);
  };

  const finishSwipe = (e: React.PointerEvent) => {
    if (!dragging) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      return;
    }

    setDragging(false);

    if (offsetY > CLOSE_THRESHOLD) {
      setAnimating(true);
      setOffsetY(window.innerHeight);

      closeTimer.current = window.setTimeout(() => {
        onClose();
        setEntered(false);
        setOffsetY(40);
      }, CLOSE_ANIMATION);
    } else {
      setAnimating(true);
      setOffsetY(0);
    }
  };

  if (!isOpen || !app) return null;

  return (
    <div
      className={styles.currentAppCont}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishSwipe}
      onPointerCancel={finishSwipe}
      style={{
        transform: entered
          ? `translateY(-${offsetY}px) scale(${1 - offsetY / 1400})`
          : "translateY(40px)",
        opacity: entered ? 1 : 0,
        transition: animating
          ? "transform .42s cubic-bezier(.2,.8,.2,1), opacity .25s ease"
          : "none",
        transformOrigin: "center bottom",
        touchAction: "none",
      }}
    >
      {app}
      <SwipeLine />
    </div>
  );
};
