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
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>THE NEW WEB</h1>
        <h2 className={styles.bannerSecondaryText}>
          The web to change the world
        </h2>
      </div>
      <div className={styles.arrowContainer}>
        <p className={styles.arrowText}>Learn more</p>
        <SlArrowDown size={40} color={"#fff"} />
      </div>
    </div>
  );
}
