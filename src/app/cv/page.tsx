"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/components/cv/list-styles.module.css";
import useCvStore from "@/stores/cvStore";

export default function CV() {
  const { cvList } = useCvStore();

  return (
    <ContainerWrapper sections={1}>
      {() => (
        <div className={styles.cvContainer}>
          <h2 className={`${styles.title} titleText`}>CV LIST</h2>
          <div className={styles.contentContainer}>
            <div className={styles.listContainer}>
              {cvList.map((cv, index) => (
                <div className={styles.itemContainer} key={index + cv.uuid} />
              ))}
              {cvList.length < 9 && (
                <div className={styles.addContainer}>
                  <p className={`${styles.addText} titleText`}>Add new +</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </ContainerWrapper>
  );
}
