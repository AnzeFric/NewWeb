"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/components/cv/list-styles.module.css";
import { useState } from "react";
import { CVData } from "@/constants/interfaces/cv";

// MAX 21 CVS

export default function CV() {
  const [cvList, setCvList] = useState<Array<CVData>>([]); // To zustand store

  return (
    <ContainerWrapper sections={1}>
      {({ scrollDown }) => (
        <div className={styles.container}>
          <h2 className={`${styles.title} titleText`}>CV LIST</h2>
          <div className={styles.listContainer}>
            {cvList.map((cv, index) => (
              <div className={styles.itemContainer} key={index + cv.uuid}>
                <p>{cv.name}</p>
              </div>
            ))}
            {cvList.length < 21 && (
              <div className={styles.addContainer}>
                <p className={`${styles.addText} titleText`}>Add new +</p>
              </div>
            )}
          </div>
        </div>
      )}
    </ContainerWrapper>
  );
}
