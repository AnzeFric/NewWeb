"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/app/cv/cv-styles.module.css";
import useCvStore from "@/stores/cvStore";
import { useRouter } from "next/navigation";

export default function CV() {
  const { cvList } = useCvStore();
  const router = useRouter();

  const redirectToAddCv = () => {
    router.push("/cv/add");
  };

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
              {cvList.length < 8 && (
                <button
                  className={styles.addContainer}
                  onClick={redirectToAddCv}
                >
                  <p className={`${styles.addText} titleText`}>Add new +</p>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </ContainerWrapper>
  );
}
