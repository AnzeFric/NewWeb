import { useWindowSize } from "@/contexts/WindowSizeContext";
import styles from "@/constants/styles/components/global/nav-styles.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

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
  }, [menuOpened]);

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
              <a href="/" className={`${styles.homeText} navText`}>
                HOME
              </a>
              <a href="/hire" className={`${styles.hireText} navText`}>
                HIRE
              </a>
              <a href="/contact" className={`${styles.contactText} navText`}>
                CONTACT
              </a>
              <a href="/history" className={`${styles.historyText} navText`}>
                HISTORY
              </a>
              <a href="/team" className={`${styles.teamText} navText`}>
                TEAM
              </a>
              <a href="/other" className={`${styles.otherText} navText`}>
                OTHER
              </a>
            </div>
          </div>
        </div>
      )}

      {deviceType === "desktop" && (
        <div>
          <div className={styles.header}>
            <div className={styles.headerItems}>
              <a href="/" className={`${styles.homeText} navText`}>
                HOME
              </a>
              <a href="/hire" className={`${styles.hireText} navText`}>
                HIRE
              </a>
              <a href="/contact" className={`${styles.contactText} navText`}>
                CONTACT
              </a>
            </div>
            <h1 className={`${styles.nameText} titleText`}>ANZE FRIC</h1>
            <div className={styles.headerItems}>
              <a href="/history" className={`${styles.historyText} navText`}>
                HISTORY
              </a>
              <a href="/team" className={`${styles.teamText} navText`}>
                TEAM
              </a>
              <a href="/other" className={`${styles.otherText} navText`}>
                OTHER
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
