import styles from "@/constants/styles/components/home/education-styles.module.css";

interface Props {
  focused: boolean;
}

export default function EducationSection({ focused }: Readonly<Props>) {
  return (
    <div className={styles.educationContainer}>
      <h2 className={`${styles.sectionTitle} titleText`}>Education</h2>
      <div className={styles.contentContainer}>
        <div
          className={`${styles.bachelorSchool} ${
            focused ? styles.animateLeft : ""
          }`}
        >
          <p className={`${styles.title} primaryText`}>Bachelor</p>
          <p className={`${styles.subtitle} primaryText`}>Computer Science</p>
          <p className={`${styles.school} primaryText`}>UM FERI</p>
          <p className={`${styles.year} primaryText`}>2021 - 2025</p>
        </div>
        <div className={styles.line} />
        <div
          className={`${styles.secondarySchool} ${
            focused ? styles.animateRight : ""
          }`}
        >
          <p className={`${styles.title} primaryText`}>Secondary School</p>
          <p className={`${styles.subtitle} primaryText`}>Computer Science</p>
          <p className={`${styles.school} primaryText`}>
            Srednja sola Ravne na Koroskem
          </p>
          <p className={`${styles.year} primaryText`}>2017 - 2021</p>
        </div>
      </div>
      <div className={styles.primarySchool}>
        <p className={`${styles.title} primaryText`}>Primary School</p>
      </div>
    </div>
  );
}
