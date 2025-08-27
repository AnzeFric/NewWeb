"use client";

import Image from "next/image";
import main_background from "@/assets/main_background.webp";
import styles from "@/styles/components/home/banner-styles.module.css";
import { SlArrowDown } from "react-icons/sl";

interface Props {
  scrollDown: () => void;
}

export default function BannerSection({ scrollDown }: Readonly<Props>) {
  return (
    <div className={styles.container}>
      <Image
        src={main_background}
        className={styles.image}
        alt="Entry background image"
        fill
      />
      <div className={styles.banner}>
        <h2 className={`${styles.bannerText} titleText`}>THE NEW WEB</h2>
        <h3 className={`${styles.bannerSecondaryText} titleText`}>
          web to change the world
        </h3>
      </div>
      <button className={styles.arrowContainer} onClick={() => scrollDown()}>
        <p className={`${styles.arrowText} primaryText`}>Learn more</p>
        <SlArrowDown size={"1.5rem"} color={"#fff"} />
      </button>
    </div>
  );
}
