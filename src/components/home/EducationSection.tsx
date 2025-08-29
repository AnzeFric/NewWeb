import styles from "@/constants/styles/components/home/education-styles.module.css";

interface Props {
  focused: boolean;
}

export default function EducationSection({ focused }: Readonly<Props>) {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.contentContainer}>
        <div
          className={`${styles.bachelorSchool} ${
            focused ? styles.animateLeft : ""
          }`}
        >
          <p className={styles.title}>Bachelor</p>
          <p className={styles.subtitle}>Computer Science</p>
          <p className={styles.school}>UM FERI</p>
          <p className={styles.year}>2021 - 2025</p>
        </div>
        <div className={styles.line} />
        <div
          className={`${styles.secondarySchool} ${
            focused ? styles.animateRight : ""
          }`}
        >
          <p className={styles.title}>Secondary School</p>
          <p className={styles.subtitle}>Computer Science</p>
          <p className={styles.school}>Srednja sola Ravne na Koroskem</p>
          <p className={styles.year}>2017 - 2021</p>
        </div>
      </div>
      <div className={styles.primarySchool}>
        <p className={styles.title}>Primary School</p>
      </div>
    </div>
  );
}
