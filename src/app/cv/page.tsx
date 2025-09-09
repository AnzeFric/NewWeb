"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import CvListDisplay from "@/components/cv/CvListDisplay";

export default function CV() {
  return (
    <ContainerWrapper sections={1}>
      {({ scrollDown }) => <CvListDisplay />}
    </ContainerWrapper>
  );
}
