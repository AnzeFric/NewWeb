"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/components/team/team-styles.module.css";

export default function HirePage() {
  return (
    <ContainerWrapper sections={1}>
      {({ scrollUp, scrollDown }) => (
        <div>
          <p>Team page</p>
        </div>
      )}
    </ContainerWrapper>
  );
}
