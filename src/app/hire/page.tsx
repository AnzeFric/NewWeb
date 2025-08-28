"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/components/hire/hire-styles.module.css";

export default function HirePage() {
  return (
    <ContainerWrapper sections={1}>
      {({ scrollUp, scrollDown }) => (
        <div>
          <p>Hire page</p>
        </div>
      )}
    </ContainerWrapper>
  );
}
