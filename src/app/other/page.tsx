"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/components/other/other-styles.module.css";

export default function OtherPage() {
  return (
    <ContainerWrapper sections={1}>
      {({ scrollUp, scrollDown }) => (
        <div>
          <p>Other page</p>
        </div>
      )}
    </ContainerWrapper>
  );
}
