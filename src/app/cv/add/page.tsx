"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/app/cv/add-styles.module.css";
import SummarySection from "@/components/cv/SummarySection";
import { useState } from "react";

export default function AddCV() {
  const [sectionNum, setSectionNum] = useState(0);
  const MAX_SECTIONS = 1; // Number of sections in content container

  const nextSection = () => {
    if (sectionNum === MAX_SECTIONS) return;
    setSectionNum((prev) => prev + 1);
  };

  const prevSection = () => {
    setSectionNum((prev) => prev - 1);
  };

  return (
    <ContainerWrapper sections={1}>
      {() => (
        <div className={styles.addCvContainer}>
          <h2 className={`${styles.title} titleText`}>ADD NEW CV</h2>

          <div className={styles.addCvContentContainer}>
            {sectionNum === 0 && <SummarySection />}
          </div>

          <div className={styles.buttonContainer}>
            {sectionNum > 0 && (
              <button onClick={prevSection}>
                <p>Back</p>
              </button>
            )}
            <button onClick={nextSection}>
              <p>Next</p>
            </button>
          </div>
        </div>
      )}
    </ContainerWrapper>
  );
}
