"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/components/history/history-styles.module.css";

export default function HistoryPage() {
  return (
    <ContainerWrapper sections={1}>
      {({ scrollUp, scrollDown }) => (
        <div>
          <p>History page</p>
        </div>
      )}
    </ContainerWrapper>
  );
}
