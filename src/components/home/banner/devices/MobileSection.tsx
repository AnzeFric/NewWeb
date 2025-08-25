import styles from "../style.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";

interface Props {
  menuRef: React.RefObject<HTMLDivElement | null>;
  toggleMenu: () => void;
  menuOpened: boolean;
}

export default function MobileSection({
  menuRef,
  toggleMenu,
  menuOpened,
}: Readonly<Props>) {
  return (
    <div ref={menuRef} className={styles.mobileContainer}>
      <div className={styles.mobileHeader}>
        <h1 className={`${styles.nameText} titleText`}>ANZE FRIC</h1>
        <BiMenuAltRight size={40} color={"#fff"} onClick={toggleMenu} />
      </div>
      <div
        className={`${styles.menu} ${menuOpened ? styles.open : styles.close}`}
      >
        <div className={styles.headerItems}>
          <p className={`${styles.eventsText} navText`}>EVENTS</p>
          <p className={`${styles.hireText} navText`}>HIRE</p>
          <p className={`${styles.contactText} navText`}>CONTACT</p>
          <p className={`${styles.historyText} navText`}>HISTORY</p>
          <p className={`${styles.teamText} navText`}>TEAM</p>
          <p className={`${styles.otherText} navText`}>OTHER</p>
        </div>
      </div>
      <div className={styles.banner}>
        <h2 className={`${styles.bannerText} titleText`}>THE NEW WEB</h2>
        <h3 className={`${styles.bannerSecondaryText} titleText`}>
          web to change the world
        </h3>
      </div>
      <div className={styles.arrowContainer}>
        <p className={`${styles.arrowText} primaryText`}>Learn more</p>
        <SlArrowDown size={40} color={"#fff"} />
      </div>
    </div>
  );
}
