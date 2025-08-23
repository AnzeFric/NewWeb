import Image from "next/image";
import main_background from "@/assets/main_background.jpg";
import styles from "./style.module.css";
import { SlArrowDown } from "react-icons/sl";

export default function BannerSection() {
  return (
    <div>
      <Image
        src={main_background}
        className={styles.image}
        alt="Entry background image"
      />
      <div className={styles.header}>
        <div className={styles.headerItems}>
          <p className={`${styles.eventsText} navText`}>EVENTS</p>
          <p className={`${styles.hireText} navText`}>HIRE</p>
          <p className={`${styles.contactText} navText`}>CONTACT</p>
        </div>
        <h1 className={`${styles.nameText} titleText`}>ANZE FRIC</h1>
        <div className={styles.headerItems}>
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
