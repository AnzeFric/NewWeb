"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";

export default function HistoryPage() {
  return (
    <ContainerWrapper sections={1}>
      {({ scrollUp, scrollDown }) => <p>History page</p>}
    </ContainerWrapper>
  );
}
