import { useWindowSize } from "@/contexts/WindowSizeContext";
import styles from "@/constants/styles/components/global/nav-styles.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";

export default function NavSection() {
  const { deviceType } = useWindowSize();

  const [menuOpened, setMenuOpened] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const preventTouchScroll = useCallback((e: TouchEvent) => {
    e.preventDefault();
  }, []);

  const toggleMenu = () => {
    if (!menuRef.current) return;
    setMenuOpened((prev) => !prev);
  };

  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflowY = "hidden";
      document.addEventListener("touchmove", preventTouchScroll, {
        passive: false,
      });
    } else {
      document.body.style.overflowY = "unset";
      document.removeEventListener("touchmove", preventTouchScroll);
    }

    return () => {
      document.body.style.overflowY = "unset";
      document.removeEventListener("touchmove", preventTouchScroll);
    };
  }, [menuOpened, preventTouchScroll]);

  return (
    <div className={styles.container}>
      {(deviceType === "mobile" || deviceType === "tablet") && (
        <div ref={menuRef}>
          <div className={styles.header}>
            <h1 className={`${styles.nameText} titleText`}>ANZE FRIC</h1>
            <BiMenuAltRight size={40} color={"#fff"} onClick={toggleMenu} />
          </div>
          <div
            className={`${styles.menu} ${
              menuOpened ? styles.open : styles.close
            }`}
          >
            <div className={styles.headerItems}>
              <Link href="/" className={`${styles.homeText} navText`}>
                HOME
              </Link>
              <a
                href="https://rutart.si/"
                className={`${styles.historyText} navText`}
              >
                RUTART
              </a>
              <Link href="/" className={`${styles.teamText} navText`}>
                EMPTY
              </Link>
              <Link href="/" className={`${styles.hireText} navText`}>
                EMPTY
              </Link>
              <Link href="/" className={`${styles.contactText} navText`}>
                EMPTY
              </Link>
              <Link href="/" className={`${styles.otherText} navText`}>
                EMPTY
              </Link>
            </div>
          </div>
        </div>
      )}

      {deviceType === "desktop" && (
        <div>
          <div className={styles.header}>
            <div className={styles.headerItems}>
              <Link href="/" className={`${styles.homeText} navText`}>
                HOME
              </Link>
              <a
                href="https://rutart.si/"
                className={`${styles.historyText} navText`}
              >
                RUTART
              </a>
              <Link href="/" className={`${styles.teamText} navText`}>
                EMPTY
              </Link>
            </div>
            <h1 className={`${styles.nameText} titleText`}>ANZE FRIC</h1>
            <div className={styles.headerItems}>
              <Link href="/" className={`${styles.hireText} navText`}>
                EMPTY
              </Link>
              <Link href="/" className={`${styles.contactText} navText`}>
                EMPTY
              </Link>
              <Link href="/" className={`${styles.otherText} navText`}>
                EMPTY
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
