import styles from "@/constants/styles/components/home/work-styles.module.css";

interface Props {
  focused: boolean;
}

export default function WorkSection({ focused }: Readonly<Props>) {
  return (
    <div className={styles.workContainer}>
      <h2 className={`${styles.sectionTitle} titleText`}>Work history</h2>
      <div
        className={`${styles.contentContainer} ${
          focused ? styles.animateRight : styles.offscreenRight
        }`}
      />
    </div>
  );
}
