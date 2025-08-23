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
          <p className={styles.eventsText}>EVENTS</p>
          <p className={styles.hireText}>HIRE</p>
          <p className={styles.contactText}>CONTACT</p>
        </div>
        <h1 className={styles.nameText}>ANŽE FRIC</h1>
        <div className={styles.headerItems}>
          <p className={styles.historyText}>HISTORY</p>
          <p className={styles.teamText}>TEAM</p>
          <p className={styles.otherText}>OTHER</p>
        </div>
      </div>
      <div className={styles.banner}>
        <h2 className={styles.bannerText}>THE NEW WEB</h2>
        <h3 className={styles.bannerSecondaryText}>web to change the world</h3>
      </div>
      <div className={styles.arrowContainer}>
        <p className={styles.arrowText}>Learn more</p>
        <SlArrowDown size={40} color={"#fff"} />
      </div>
    </div>
  );
}
