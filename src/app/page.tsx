import Image from "next/image";
import styles from "./page.module.css";
import main_background from "@/assets/main_background.jpg";

export default function Home() {
  return (
    <div>
      <Image
        src={main_background}
        className={styles.image}
        alt="Entry background image"
      />
      <div className={styles.header}>
        <h1 className={styles.headerText}>THE NEW WEB</h1>
        <h2 className={styles.headerSecondaryText}>
          The web to change the world
        </h2>
      </div>
    </div>
  );
}
